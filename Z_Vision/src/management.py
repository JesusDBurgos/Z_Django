import os

from flask import Flask

app = Flask(__name__)

#Creación  de ruta del servidor
@app.route('/')
def hello_world():
    return 'Hello, World!'


if __name__ == "__main__":
    #app.debug = True
    #app.run(debug=True)
    app.run()

