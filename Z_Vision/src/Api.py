from flask import Flask, jsonify, request

from db_conn import create_db_table

import app_controller

app = Flask(__name__)

# Endpoint HTTP creación de usuario
@app.route("/api/v1/users/create", methods=["POST"])
def api_create_user():
    user_details = request.get_json()
    age = user_details["age"]
    gender = user_details["gender"]
    emotion = user_details["emotion"]
    DateCreated = user_details["DateCreated"]
    result = app_controller.create_user(age, gender, emotion, DateCreated)
    return jsonify(result)

# Endpoint HTTP listado de usuarios
@app.route('/api/v1/users', methods=["GET"])
def api_get_users():
    result = app_controller.get_users()
    return jsonify(result)

# Endpoint HTTP listado de usuario por id
@app.route("/api/v1/users/<id>", methods=["GET"])
def api_get_user_by_id(id):
    result = app_controller.get_user_by_id(id)
    return jsonify(result)

# Endpoint HTTP actualización de usuario
@app.route("/api/v1/users/update/<id>", methods=["PUT"])
def api_update_user(id):
    user_details = request.get_json()
    #id = user_details["id"]
    age = user_details["age"]
    gender = user_details["gender"]
    emotion = user_details["emotion"]
    DateCreated = user_details["DateCreated"]
    result = app_controller.update_user(id, age, gender, emotion, DateCreated)
    return jsonify(result)

# Endpoint HTTP eliminación de usuario
@app.route("/api/v1/users/delete/<id>", methods=["DELETE"])
def api_delete_user(id):
    result = app_controller.delete_user(id)
    return jsonify(result)


if __name__ == "__main__":
    create_db_table()
    app.run(host='0.0.0.0', port=8000, debug=False)