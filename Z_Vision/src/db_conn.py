#!/usr/bin/python
import sqlite3

def connect_to_db():
    conn = sqlite3.connect("Usersdatabase.db")
    return conn

def create_db_table():

   tables = [
       """
            CREATE TABLE IF NOT EXISTS users (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                age INTEGER NOT NULL,
                gender TEXT NOT NULL,
                emotion TEXT NOT NULL,
                DateCreated DATETIME NOT NULL
            );
        """
   ]
   db = connect_to_db()
   cursor = db.cursor()
   for table in tables:
       cursor.execute(table)    



'''
try:
     
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
        print("La creación de la tabla de usuarios ha fallado, puede que ya exista")
    #finally:
    conn.close()

'''
