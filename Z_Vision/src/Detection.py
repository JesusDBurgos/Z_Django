
#from keras.models import load_model
import numpy as np
import cv2


camara = cv2.VideoCapture(0)

# Organización de rutas de modelos entrenados
detection_model_path = './models/detection_models/haarcascade_frontalface_default.xml'
emotion_model_path = './models/emotion_models/fer2013_mini_XCEPTION.102-0.66.hdf5'
age_model_path = './models/age_models/fer2013_mini_XCEPTION.102-0.66.hdf5'
gender_model_path = './models/gender_models/simple_CNN.81-0.96.hdf5'

def get_frames_camera():

    # Cargamos los modelos
    #face_detection = load_model(detection_model_path)
    #emotion_classifier = load_model(emotion_model_path, compile=False)
    #age_classifier = load_model(age_model_path, compile=False)
    #gender_classifier = load_model(gender_model_path, compile=False)

    # Valores medibles
    MODEL_MEAN_VALUES = (78.4263377603, 87.7689143744, 114.895847746)
    AgeList = ['(0-2)', '(4-6)', '(8-12)', '(15-20)',
           '(25-32)', '(38-43)', '(48-53)', '(60-100)']
    AgeColors = [(0, 0, 255), (0, 255, 0), (0, 0, 0),
             (255, 255, 0), (255, 0, 0), (0, 255, 255), (255, 255, 255)]
    GenderList = ['Male', 'Female']
    EmotionList = ["angry", "disgust", "fear",
               "happy", "sad", "suprised", "neutral"]
    EmotionColors = [(0, 0, 255), (0, 255, 0), (0, 0, 0),
                 (255, 255, 0), (255, 0, 0), (0, 255, 255), (255, 255, 255)]

 

    #facec = cv2.CascadeClassifier('./models/detection_models/haarcascade_frontalface_default.xml')
    facec = cv2.CascadeClassifier(detection_model_path)
    #model = FacialExpressionModel("model.json", "model_weights.h5")
    font = cv2.FONT_HERSHEY_SIMPLEX
    

    ok, frame = camara.read()
    if not ok:
        return False, None
    
    # Acá van los algoritmos de detección y clasificación
    gray_fr = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = facec.detectMultiScale(gray_fr, scaleFactor=1.3, minNeighbors=5, minSize=(30,30), maxSize=(200,200))

    for (x, y, w, h) in faces:
        fc = gray_fr[y:y+h, x:x+w]

        roi = cv2.resize(fc, (48, 48))
        #pred = model.predict_emotion(roi[np.newaxis, :, :, np.newaxis])

        # cv2.putText(fr, pred, (x, y), font, 1, (255, 255, 0), 2)
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Codificar la imagen como JPG
        _, bufer = cv2.imencode(".jpg", frame)
        imagen = bufer.tobytes()

    return True, imagen
