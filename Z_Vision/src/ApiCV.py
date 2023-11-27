#!/usr/bin/env python
from importlib import import_module
import os
from flask import Flask, render_template, Response
import cv2

app = Flask(__name__)

# Si tienes varias cámaras puedes acceder a ellas en 1, 2, etcétera (en lugar de 0)
camara = cv2.VideoCapture(0)

# Una función generadora para stremear la cámara
# https://flask.palletsprojects.com/en/1.1.x/patterns/streaming/


def generador_frames():
    while True:
        ok, imagen = obtener_frame_camara()
        if not ok:
            break
        else:
            # Regresar la imagen en modo de respuesta HTTP
            #yield b"--frame\r\nContent-Type: image/jpeg\r\n\r\n" + imagen + b"\r\n"
            yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + imagen + b'\r\n')


def obtener_frame_camara():
    facec = cv2.CascadeClassifier('./models/detection_models/haarcascade_frontalface_default.xml')
    #model = FacialExpressionModel("model.json", "model_weights.h5")
    font = cv2.FONT_HERSHEY_SIMPLEX

    ok, frame = camara.read()
    if not ok:
        return False, None
    
    # Acá van los algoritmos de detección y clasificación
    gray_fr = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = facec.detectMultiScale(gray_fr, 1.3, 5)

    for (x, y, w, h) in faces:
        fc = gray_fr[y:y+h, x:x+w]

        roi = cv2.resize(fc, (48, 48))
        # pred = model.predict_emotion(roi[np.newaxis, :, :, np.newaxis])

        # cv2.putText(fr, pred, (x, y), font, 1, (255, 255, 0), 2)
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Codificar la imagen como JPG
        _, bufer = cv2.imencode(".jpg", frame)
        imagen = bufer.tobytes()

    return True, imagen


# Cuando visiten la ruta
@app.route("/streaming_camara")
def streaming_camara():
    return Response(generador_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


# Cuando visiten /, servimos el index.html
@app.route('/')
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")


'''

# import camera driver
if os.environ.get('CAMERA'):
    Camera = import_module('camera_' + os.environ['CAMERA']).Camera
else:
    from camera import Camera

# Raspberry Pi camera module (requires picamera package)
# from camera_pi import Camera

app = Flask(__name__)


@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')


def gen(camera):
    """Video streaming generator function."""
    yield b'--frame\r\n'
    while True:
        frame = camera.get_frame()
        yield b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n--frame\r\n'


@app.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(Camera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)

'''
