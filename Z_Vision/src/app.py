import os

from flask import Flask, jsonify, request, redirect
#from flask_pymongo import PyMongo
from flask_cors import CORS

from bson import ObjectId

from flask_sqlalchemy import SQLAlchemy

project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "bookdatabase.db"))

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = database_file
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# Instantiation
app = Flask(__name__)

#Con base de datos mongoDB
#app.config['MONGO_URI'] = 'mongodb://localhost/pythonreact'
#mongo = PyMongo(app)

# Settings
CORS(app)

# Database con base de datos mongoDB
#db = mongo.db.pythonreact

# Routes
@app.route('/users', methods=['POST'])
def createUser():
  print(request.json)
  id = db.insert({
    'name': request.json['name'],
    'age': request.json['age'],
    'gender': request.json['gender'],
    'emotion': request.json['emotion']
  })
  return jsonify(str(ObjectId(id)))


@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'age': doc['age'],
            'gender': doc['gender'],
            'emotion': doc['emotion']
        })
    return jsonify(users)

@app.route('/users/<id>', methods=['GET'])
def getUser(id):
  user = db.find_one({'_id': ObjectId(id)})
  print(user)
  return jsonify({
      '_id': str(ObjectId(user['_id'])),
      'name': user['name'],
      'age': user['age'],
      'gender': user['gender'],
      'emotion': user['emotion']
  })


@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
  db.delete_one({'_id': ObjectId(id)})
  return jsonify({'message': 'User Deleted'})

@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
  print(request.json)
  db.update_one({'_id': ObjectId(id)}, {"$set": {
    'name': request.json['name'],
    'age': request.json['age'],
    'gender': request.json['gender'],
    'emotion': request.json['emotion']
  }})
  return jsonify({'message': 'User Updated'})

if __name__ == "__main__":
    app.run(debug=True)