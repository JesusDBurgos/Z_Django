import os

#Librerías para levantar el servidor y retornar las solicitudes HTTPS
from flask import Flask, jsonify, request

#Librerías para crear el modelo de usuario
from flask_marshmallow import Marshmallow
from marshmallow import Schema, fields, Model, Column, Integer, String, DateTime
import datetime

#Librerías para enviar datos al Frontend
from flask_cors import CORS


app = Flask(__name__)

ma=Marshmallow(app)

CORS(app, resources={r"/*": {"origins": "*"}})


#Creación del modelo usuario
class Usuarios(Model):
    user_id = Column(Integer,primary_key=True)
    name    = Column(String(100))
    age     = Column(Integer(100))
    gender  = Column(String(100))
    emotion = Column(String(100))
    date    = Column(DateTime,default=datetime.datetime.now)

    def __init__(self,name,age, gender, emotion):
        self.name=name
        self.age=age
        self.gender=gender
        self.emotion=emotion


# creación de funciones
#Consultar usuarios
def get_users():
    pass

def get_user_by_id():
    pass

#agregar usuarios
def insert_user():
    pass

#actualizar usuarios
def update_user():
    pass

#eliminar usuarios
def delete_user():
    pass


#Desplegando los endpoints

@app.route('/v1/api/users', methods=['GET'])
# Esta función permite listar los usuarios
def api_get_users():
    return users    
#    return jsonify(get_users())

@app.route('/v1/api/users/{user_id}', methods=['GET'])
# Esta función permite listar los usuarios por id
def api_get_user(user_id: Integer):
    for user in users:
        if user["id"]== id:
            return user
    return "La reservación no existe"
#    return jsonify(get_user_by_id(user_id))

@app.route('/v1/api/users/add',  methods = ['POST'])
def api_add_user():
    user = request.get_json()
    return jsonify(insert_user(user))

@app.route('/v1/api/users/update',  methods = ['PUT'])
def api_update_user():
    user = request.get_json()
    return jsonify(update_user(user))

@app.route('/v1/api/users/delete/<user_id>',  methods = ['DELETE'])
def api_delete_user(user_id):
    return jsonify(delete_user(user_id))

#Creación  de ruta del servidor
@app.route('/v1/Bienvenida')
def home():
    return "Bienvenidos a la API de Ingeniería Mecatronica UNAB"


# Usuarios de prueba
users = []
user0 = {
    "user_id": "001",
    "name": "Charles Effiong",
    "age": "48",
    "gender": "Masculino",
    "emotion": "Enojo",
    "date" : "05-05-2025"
}

user1 = {
    "user_id": "002",
    "name": "Samantha Adebanjo",
    "age": "25",
    "gender": "Femenino",
    "emotion": "Felicidad",
    "date" : "06-05-2025"
}

users.append(user0)
users.append(user1)

#Despliegue del servidor
if __name__ == "__main__":
    #app.debug = True
    #app.run(debug=True)
    app.run()

