#Librerías para crear el modelo de usuario con un ORM
from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

#Clase modelo
class Users(db.Model):
    __tablename__ = 'users'

    id      = db.Column(db.Integer, primary_key=True)
    age     = db.Column(db.Integer(100), nullable=False)
    gender  = db.Column(db.String(15), nullable=False)
    emotion = db.Column(db.String(20), nullable=False)
    date    = db.Column(db.DateTime, default=datetime.datetime.now)

    def json(self):
        return {'id': self.id, 'age': self.age, 'gender': self.gender, 'emotion': self.emotion}

db.init_app()
db.create_all()

'''
'''