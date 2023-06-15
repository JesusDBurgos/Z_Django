import os

from flask import Flask

app = Flask(__name__)

#Creación  de ruta del servidor
@app.route('/')
def hello_world():
    return 'Hello, World!'


# Usuarios de prueba
users = []
user0 = {
    "name": "Charles Effiong",
    "age": "48",
    "gender": "Masculino",
    "gender": "Enojo"
}

user1 = {
    "name": "Samantha Adebanjo",
    "age": "25",
    "gender": "Femenino",
    "gender": "Felicidad"
}



#Despliegue del servidor
if __name__ == "__main__":
    #app.debug = True
    #app.run(debug=True)
    app.run()

