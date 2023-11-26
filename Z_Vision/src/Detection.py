import cv2
from keras.models import load_model
import numpy as np

#Organización de rutas de modelos entrenados
detection_model_path = './models/detection_models/haarcascade_frontalface_default.xml'
emotion_model_path = './models/emotion_models/fer2013_mini_XCEPTION.102-0.66.hdf5'
age_model_path = './models/age_models/fer2013_mini_XCEPTION.102-0.66.hdf5'
gender_model_path = './models/gender_models/simple_CNN.81-0.96.hdf5'

# Cargamos los modelos
face_detection = load_model(detection_model_path)
emotion_classifier = load_model(emotion_model_path, compile=False)
age_classifier = load_model(age_model_path, compile=False)
gender_classifier = load_model(gender_model_path, compile=False)