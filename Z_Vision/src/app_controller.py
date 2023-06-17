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
def get_user_by_id(id):
    db = connect_to_db()
    cursor = db.cursor()
    statement = "SELECT user_id, age, gender, emotion, DateCreated FROM users WHERE id = ?"
    cursor.execute(statement, [id])
    return cursor.fetchone()

#Actualizar usuario por id en la base de datos
def update_user(id, age, gender, emotion, DateCreated):
    db = connect_to_db()
    cursor = db.cursor()
    statement = "UPDATE users SET age = ?, gender = ?, emotion = ? , DateCreated = ? WHERE id = ?"
    cursor.execute(statement, [age, gender, emotion, DateCreated, id])
    db.commit()
    return True

#Eliminar usuario por id en la base de datos
def delete_user(id):
    db = connect_to_db()
    cursor = db.cursor()
    statement = "DELETE FROM users WHERE id = ?"
    cursor.execute(statement, [id])
    db.commit()
    return True