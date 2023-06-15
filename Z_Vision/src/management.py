#Librerías para levantar el servidor y retornar las solicitudes HTTPS
from flask import Flask, jsonify, request, make_response

app = Flask(__name__)

#Librerías para crear el modelo de usuario con un ORM
from flask_sqlalchemy import SQLAlchemy
from os import environ

app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DB_URL')
db = SQLAlchemy(app)

#Librerías para enviar datos al Frontend
from flask_cors import CORS

CORS(app)


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

