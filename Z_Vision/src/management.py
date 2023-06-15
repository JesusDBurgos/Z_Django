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
class UsersModel(Model):
    user_id      = Column(Integer,primary_key=True)
    name         = Column(String(100))
    age          = Column(Integer(100))
    gender       = Column(String(100))
    emotion      = Column(String(100))
    date_created = Column(DateTime,auto_now_add=True)

    def __init__(self,name,age, gender, emotion):
        self.name=name
        self.age=age
        self.gender=gender
        self.emotion=emotion

class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("name","age","gender","emotion", "date_created", "_links")

    # Smart hyperlinking
    _links = ma.Hyperlinks(
        {
            "self": ma.URLFor("user_detail", values=dict(id="<id>")),
            "collection": ma.URLFor("users"),
        }
    )


user_schema = UserSchema()
users_schema = UserSchema(many=True)


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

@app.route('/api/v1/users', methods=['GET'])
def get_users():
    # Esta función permite listar los usuarios
    response = {'message': 'success'}
    return users  
    #return jsonify(response)

@app.route('/api/v1/users/<id>', methods=['GET'])
def get_user(id):
    response = {'message': 'success'}
    return jsonify(response)

@app.route('/api/v1/users/', methods=['POST'])
def create_user():
    response = {'message': 'success'}
    return jsonify(response)

@app.route('/api/v1/users/<id>', methods=['PUT'])
def update_user(id):
    response = {'message': 'success'}
    return jsonify(response)

@app.route('/api/v1/users/<id>', methods=['DELETE'])
def delete_user(id):
    response = {'message': 'success'}
    return jsonify(response)

#Creación  de ruta del servidor
@app.route('/v1/Bienvenida')
def home():
    return "Bienvenidos a la API de Visión Computacional de Ingeniería Mecatronica UNAB"


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

