import os

from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})






#Desplegando las endpoints
@app.route('/api/users', methods=['GET'])
def api_get_users():
    return jsonify(get_users())

@app.route('/api/users/<user_id>', methods=['GET'])
def api_get_user(user_id):
    return jsonify(get_user_by_id(user_id))

@app.route('/api/users/add',  methods = ['POST'])
def api_add_user():
    user = request.get_json()
    return jsonify(insert_user(user))

@app.route('/api/users/update',  methods = ['PUT'])
def api_update_user():
    user = request.get_json()
    return jsonify(update_user(user))

@app.route('/api/users/delete/<user_id>',  methods = ['DELETE'])
def api_delete_user(user_id):
    return jsonify(delete_user(user_id))

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

