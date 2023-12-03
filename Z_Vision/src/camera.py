"""
import time
from base_camera import BaseCamera


class Camera(BaseCamera):
    #An emulated camera implementation that streams a repeated sequence of
    #files 1.jpg, 2.jpg and 3.jpg at a rate of one frame per second.
    imgs = [open(f + '.jpg', 'rb').read() for f in ['1', '2', '3']]

    @staticmethod
    def frames():
        while True:
            yield Camera.imgs[int(time.time()) % 3]
            time.sleep(1)

"""

import cv2
from keras.models import load_model
import numpy as np

# path for haar cascade file
HAAR_CASCADE_DIR = "./models/detection_models/haarcascade_frontalface_default.xml"
# path where emotion model is saved
EMOTION_MODEL_DIR = "./models/emotion_models/fer2013_mini_XCEPTION.119-0.65.hdf5"
# path where gender model is saved
GENDER_MODEL_DIR = "./models/gender_models/simple_CNN.81-0.96.hdf5"

EMOTIONS = ["ANGRY", "DISGUST", "FEAR", "HAPPY", "NEUTRAL", "SAD", "SURPRISE"]
COLORS = [(0, 0, 255), (0, 255, 0), (0, 255, 255), (255, 0, 0), (255, 255, 0), (255, 0, 255), (0, 165, 255)]
EMOTION_MAP = {emotion: {"index": idx,
                         "color": COLORS[idx]} for idx, emotion in enumerate(EMOTIONS)}

# for scaling output text size according to the face size detected by the haar cascade
FONT_SCALING_FACTOR = 0.000025


def predict_gender(roi, gender_model):
    """
    This function returns prediction results for a single frame by utilizing the gender model

    :param roi: (numpy.ndarray) ROI detected by the haar cascade
    :param gender_model: (keras.engine.sequential.Sequential) loaded gender model weights
    :return res: (numpy.ndarray) array containing softmax probabilities for each class
    """
    roi = cv2.resize(roi, (128, 128))  # gender model was trained on images resized to 128x128
    roi = np.reshape(roi, (1, 128, 128, 1))
    res = gender_model.predict(roi)
    return res


def predict_emotion(roi, emotion_model):
    """
    This function returns prediction results for a single frame by utilizing the emotion model

    :param roi: (numpy.ndarray) ROI detected by the haar cascade
    :param emotion_model: (keras.engine.sequential.Sequential) loaded emotion model weights
    :return res: (numpy.ndarray) array containing softmax probabilities for each class
    """
    roi = cv2.resize(roi, (64, 64))  # emotion model was trained on images resized to 64x64
    roi = np.reshape(roi, (1, 64, 64, 1))
    res = emotion_model.predict(roi)
    return res


def get_frame(face_cascade, gender_model, emotion_model):
    """
    This function processes the video frame-by-frame, overlays results on each frame and displays it.

    :param face_cascade: (cv2.CascadeClassifier) loaded cascade classfier for frontal face
    :param gender_model: (keras.engine.sequential.Sequential) gender model weights
    :param emotion_model: (keras.engine.sequential.Sequential) emotion model weights
    :return None:
    """
    # 0 - utilize default web cam, use 1 for external cam
    cap = cv2.VideoCapture(0)
    while cap.isOpened():
        ret, frame = cap.read()
        img = np.copy(frame)
        # convert to grayscale
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        # detect frontal faces
        faces = face_cascade.detectMultiScale(img, 1.3, 5)

        for (x, y, w, h) in faces:
            roi = frame[y:y + h, x:x + w]
            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 3)
            
            # divide roi matrix by 255 so all values are between 0 and 1
            prediction_gen = predict_gender(roi/255.0, gender_model)  
            prediction_emo = predict_emotion(roi/255.0, emotion_model)
            # predicted class' index
            gender_index = int(np.argmax(prediction_gen))
            emotion_index = int(np.argmax(prediction_emo))

            font = cv2.FONT_HERSHEY_SIMPLEX
            
            # overlay prediction results on each frame
            if gender_index == 0:
                cv2.putText(img, "FEMALE", (x, y), font, FONT_SCALING_FACTOR * (w * h), (0, 0, 255), 1, cv2.LINE_AA)
                cv2.putText(img, 'CONF: ' + '%.4f' % prediction_gen[0][0], (x + w, y), font,
                            FONT_SCALING_FACTOR * (w * h), (0, 255, 255), 1, cv2.LINE_AA)
            else:
                cv2.putText(img, "MALE", (x, y), font, FONT_SCALING_FACTOR * (w * h), (255, 0, 0), 1, cv2.LINE_AA)
                cv2.putText(img, 'CONF: ' + '%.4f' % prediction_gen[0][1], (x + w, y), font,
                            FONT_SCALING_FACTOR * (w * h), (0, 255, 255), 1, cv2.LINE_AA)

            emotion = EMOTIONS[emotion_index]
            cv2.putText(img, emotion, (x, y + h), font, FONT_SCALING_FACTOR * (w * h), EMOTION_MAP[emotion]["color"], 1,
                        cv2.LINE_AA)
            cv2.putText(img, 'CONF: ' + '%.4f' % prediction_emo[0][EMOTION_MAP[emotion]["index"]], (x + w, y + h), font,
                        FONT_SCALING_FACTOR * (w * h), (0, 255, 255), 1, cv2.LINE_AA)

        cv2.imshow('Facial Expression & Gender', img)

        k = cv2.waitKey(30) & 0xff
        # press "Esc" to stop
        if k == 27:
            break
    cv2.destroyAllWindows()
    cap.release()


if __name__ == "__main__":
    # load haar cascade
    face_cascade = cv2.CascadeClassifier(HAAR_CASCADE_DIR)
    # load gender model
    gender_model = load_model(GENDER_MODEL_DIR)
    # load emotion model
    emotion_model = load_model(EMOTION_MODEL_DIR)

    get_frame(face_cascade, gender_model, emotion_model)