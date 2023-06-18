from db_conn import connect_to_db

#Creación de usuario en la base de datos
def create_user(age, gender, emotion, DateCreated):
    db = connect_to_db()
    cursor = db.cursor()
    statement = "INSERT INTO users(age, gender, emotion, DateCreated) VALUES (?, ?, ?, ?)"
    cursor.execute(statement, [age, gender, emotion, DateCreated])
    db.commit()
    return True

#Listar usuarios en la base de datos
def get_users():
    db = connect_to_db()
    cursor = db.cursor()
    query = "SELECT user_id, age, gender, emotion, DateCreated FROM users"
    cursor.execute(query)
    return cursor.fetchall()

#Listar usuario por id en la base de datos
def get_user_by_id(user_id):
    db = connect_to_db()
    cursor = db.cursor()
    statement = "SELECT user_id, age, gender, emotion, DateCreated FROM users WHERE user_id = ?"
    cursor.execute(statement, [user_id])
    return cursor.fetchone()

#Actualizar usuario por id en la base de datos
def update_user(user_id, age, gender, emotion, DateCreated):
    db = connect_to_db()
    cursor = db.cursor()
    statement = "UPDATE users SET age = ?, gender = ?, emotion = ? , DateCreated = ? WHERE user_id = ?"
    cursor.execute(statement, [age, gender, emotion, DateCreated, user_id])
    db.commit()
    return True

#Eliminar usuario por id en la base de datos
def delete_user(user_id):
    db = connect_to_db()
    cursor = db.cursor()
    statement = "DELETE FROM users WHERE user_id = ?"
    cursor.execute(statement, [user_id])
    db.commit()
    return True