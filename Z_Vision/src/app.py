#!/usr/bin/python
import sqlite3

def connect_to_db():
    conn = sqlite3.connect('database.db')
    return conn

def create_db_table():
    try:
        conn = connect_to_db()
        conn.execute('''
            CREATE TABLE users (
                user_id INTEGER PRIMARY KEY NOT NULL,
                age TEXT NOT NULL,
                gender TEXT NOT NULL,
                emotion TEXT NOT NULL
            );
        ''')

        conn.commit()
        print("La creación de la tabla de usuarios ha sido exitosa")
    except:
        print("La creación de la tabla de usuarios ha fallado")
    finally:
        conn.close()