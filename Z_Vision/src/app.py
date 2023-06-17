#Librerías para levantar el servidor y retornar las solicitudes HTTPS
from flask import Flask, jsonify, request, make_response

#!/usr/bin/python
import sqlite3

def connect_to_db():
    conn = sqlite3.connect("Userdatabase.db")
    return conn

def create_db_table():
    try:

        conn = connect_to_db()
        conn.execute("""
            CREATE TABLE users (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                age TEXT NOT NULL,
                gender TEXT NOT NULL,
                emotion TEXT NOT NULL,
                DateCreated DATETIME NOT NULL
            );
        """)

        conn.commit()
        print("La creación de la tabla de usuarios ha sido exitosa")
  
    except sqlite3.OperationalError:
        print("La creación de la tabla de usuarios ha fallado")
    #finally:
    conn.close()


app = Flask(__name__)

#Librerías para consumir datos desde un cliente
from flask_cors import CORS

CORS(app)

#Desplegando funciones y endpoints

# Esta función de listado de usuarios
def get_users():
    users = []
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM users")
        rows = cur.fetchall()

        # convert row objects to dictionary
        for i in rows:
            user = {}
            user["user_id"]     = i["user_id"]
            user["age"]         = i["age"]
            user["gender"]      = i["gender"]
            user["emotion"]     = i["emotion"]
            user["DateCreated"] = i["DateCreated"]
            users.append(user)

    except:
        users = []

    return users

@app.route('/api/v2/users', methods=['GET'])
def api_get_users():
    return jsonify(get_users())

# Esta función de listado de un usuario por ID
def get_user_by_id(user_id):
    user = {}
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE user_id = ?", (user_id,))
        row = cur.fetchone()

        # convert row object to dictionary
        user["user_id"]     = row["user_id"]
        user["age"]         = row["age"]
        user["gender"]      = row["gender"]
        user["emotion"]     = row["emotion"]
        user["DateCreated"] = row["DateCreated"]
    except:
        user = {}

    return user

@app.route('/api/v2/users/<user_id>', methods=['GET'])
def get_user(user_id):
    return jsonify(get_user_by_id(user_id))

#Función de creación de usuario
def create_user(user):
    inserted_user = {}
    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("INSERT INTO users (age, gender, emotion, DateCreated) VALUES (?, ?, ?, ?)", (user['age'], user['gender'], user['emotion'], user['DateCreated']) )
        conn.commit()
        inserted_user = get_user_by_id(cur.lastrowid)
    except:
        conn().rollback()

    finally:
        conn.close()

    return inserted_user

@app.route('/api/v2/users/', methods=['POST'])
def api_create_user():
    user = request.get_json()
    return jsonify(create_user(user))