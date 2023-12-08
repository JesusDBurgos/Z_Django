# Import required modules
import cv2 as cv
import math
import time
import argparse
import random

# Lista de posibles emociones TEMPORAL
emotions = ["Tristeza", "Felicidad", "Neutral", "Enojo", "Ira", "Sorpresa"]

def getFaceBox(net, frame, conf_threshold=0.7):
    frameOpencvDnn = frame.copy()
    frameHeight = frameOpencvDnn.shape[0]
    frameWidth = frameOpencvDnn.shape[1]

    blob = cv.dnn.blobFromImage(frameOpencvDnn, 1.0, (300, 300), [104, 117, 123], True, False)

    net.setInput(blob)
    detections = net.forward()
    bboxes = []
    for i in range(detections.shape[2]):
        confidence = detections[0, 0, i, 2]
        if confidence > conf_threshold:
            x1 = int(detections[0, 0, i, 3] * frameWidth)
            y1 = int(detections[0, 0, i, 4] * frameHeight)
            x2 = int(detections[0, 0, i, 5] * frameWidth)
            y2 = int(detections[0, 0, i, 6] * frameHeight)
            bboxes.append([x1, y1, x2, y2])
            cv.rectangle(frameOpencvDnn, (x1, y1), (x2, y2), (0, 255, 0), int(round(frameHeight/150)), 8)
    return frameOpencvDnn, bboxes

# ----------- READ DNN MODELS -----------
# Model architecture for face
faceProto = "./models/detection_models/opencv_face_detector.pbtxt"
# Weights
faceModel = "./models/detection_models/opencv_face_detector_uint8.pb"

# Model architecture for age
ageProto = "./models/age_models/age_deploy.prototxt"
# Weights
ageModel = "./models/age_models/age_net.caffemodel"

# Model architecture for gender
genderProto = "./models/gender_models/gender_deploy.prototxt"
# Weights
genderModel = "./models/gender_models/gender_net.caffemodel"

# Model architecture for gender
#emotionProto = "./models/emotion_models/model.json"
# Weights
#emotionModel = "./models/emotion_models/model_weights.h5"


# Valores medibles
MODEL_MEAN_VALUES = (78.4263377603, 87.7689143744, 114.895847746)
ageList     = ['(0-2)', '(4-6)', '(8-12)', '(15-20)', '(25-32)', '(38-43)', '(48-53)', '(60-100)']
ageColors   = [(0, 0, 255), (0, 255, 0), (0, 0, 0),(255, 255, 0), (255, 0, 0), (0, 255, 255), (255, 255, 255)]
genderList  = ['Hombre', 'Mujer']
emotionList = ["angry", "disgust", "fear", "happy", "sad", "suprised", "neutral"]

# Load network
faceNet    = cv.dnn.readNet(faceModel, faceProto)
ageNet     = cv.dnn.readNet(ageModel, ageProto)
genderNet  = cv.dnn.readNet(genderModel, genderProto)
#emotionNet = cv.dnn.readNet(emotionModel, emotionProto)

def run_detection(image):
    padding = 20
    frameFace, bboxes = getFaceBox(faceNet, image)
    results = []

    for bbox in bboxes:

        #print(bbox) para detección facial
        face = image[max(0,bbox[1]-padding):min(bbox[3]+padding,image.shape[0]-1),max(0,bbox[0]-padding):min(bbox[2]+padding, image.shape[1]-1)]
        blob = cv.dnn.blobFromImage(face, 1.0, (227, 227), MODEL_MEAN_VALUES, swapRB=False)

        genderNet.setInput(blob)
        genderPreds = genderNet.forward()
        gender = genderList[genderPreds[0].argmax()]

        ageNet.setInput(blob)
        agePreds = ageNet.forward()
        age = ageList[agePreds[0].argmax()]
        emotion = random.choice(emotions)

        results.append({"gender": gender, "age": age, "emotion": emotion})

    return results

def run_detection_on_image(image):
    padding = 20
    frameFace, bboxes = getFaceBox(faceNet, image)
    print(bboxes)
    results = []

    for bbox in bboxes:
        face = image[max(0,bbox[1]-padding):min(bbox[3]+padding,image.shape[0]-1),max(0,bbox[0]-padding):min(bbox[2]+padding, image.shape[1]-1)]
        blob = cv.dnn.blobFromImage(face, 1.0, (227, 227), MODEL_MEAN_VALUES, swapRB=False)

        genderNet.setInput(blob)
        genderPreds = genderNet.forward()
        gender = genderList[genderPreds[0].argmax()]

        ageNet.setInput(blob)
        agePreds = ageNet.forward()
        age = ageList[agePreds[0].argmax()]
        emotion = random.choice(emotions)

        results.append({
            'bbox': bbox,
            'gender': gender,
            'age': age,
            'emotion': emotion,
        })

    return results

def run_detection_on_video(input=None):
    # Open a video file or an image file or a camera stream
    cap = cv.VideoCapture(args.input if args.input else 0)
    padding = 20
    while cv.waitKey(1) < 0:
        # Read frame
        t = time.time()
        hasFrame, frame = cap.read()
        if not hasFrame:
            cv.waitKey()
            break

        frameFace, bboxes = getFaceBox(faceNet, frame)
        if not bboxes:
            print("Ningún rostro detectado, Mantener el ultimo frame")
            continue

        for bbox in bboxes:
            # print(bbox)
            face = frame[max(0,bbox[1]-padding):min(bbox[3]+padding,frame.shape[0]-1),max(0,bbox[0]-padding):min(bbox[2]+padding, frame.shape[1]-1)]

            blob = cv.dnn.blobFromImage(face, 1.0, (227, 227), MODEL_MEAN_VALUES, swapRB=False)
            
            genderNet.setInput(blob)
            genderPreds = genderNet.forward()
            gender = genderList[genderPreds[0].argmax()]
            # print("Gender Output : {}".format(genderPreds))
            #print("Gender : {}, conf = {:.3f}".format(gender, genderPreds[0].max()))

            ageNet.setInput(blob)
            agePreds = ageNet.forward()
            age = ageList[agePreds[0].argmax()]
            #print("Age Output : {}".format(agePreds))
            #print("Age : {}, conf = {:.3f}".format(age, agePreds[0].max()))

            '''
            emotionNet.setInput(blob)
            emotionPreds = emotionNet.forward()
            emotion = emotionList[agePreds[0].argmax()]
            print("Emotion Output : {}".format(emotionPreds))
            print("Emotion : {}, conf = {:.3f}".format(emotion, emotionPreds[0].max()))
            '''

            label = "{}, Edad:{}".format(gender, age)
            cv.putText(frameFace, label, (bbox[0], bbox[1]-10), cv.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 255), 2, cv.LINE_AA)
            cv.imshow("Age Gender Demo", frameFace)
            # cv.imwrite("age-gender-out-{}".format(args.input),frameFace)
        #print("time : {:.3f}".format(time.time() - t))

'''
            cv.putText(frameFace, label, (bbox[0], bbox[1]-60), cv.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 255), 2, cv.LINE_AA)
            cv.putText(frameFace, label2, (bbox[0], bbox[1]-35), cv.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 255), 2, cv.LINE_AA)
            cv.putText(frameFace, label2, (bbox[0], bbox[1]-10), cv.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 255), 2, cv.LINE_AA)
            cv.imshow("Age Gender Demo", frameFace)

'''


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Use this script to run age and gender recognition using OpenCV.')
    parser.add_argument('--input', help='Path to input image or video file. Skip this argument to capture frames from a camera.')
    args = parser.parse_args()
    run_detection_on_video(args.input)

