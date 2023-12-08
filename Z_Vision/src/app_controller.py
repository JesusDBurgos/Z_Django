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
    query = "SELECT id, age, gender, emotion, DateCreated FROM users"
    cursor.execute(query)
    return cursor.fetchall()

#Listar usuario por id en la base de datos
def get_user_by_id(id):
    db = connect_to_db()
    cursor = db.cursor()
    statement = "SELECT id, age, gender, emotion, DateCreated FROM users WHERE id = ?"
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

#Consultar datos de metricas
def get_ages():
    db = connect_to_db()
    cursor = db.cursor()

    query = "SELECT count(id) FROM users"
    cursor.execute(query)
    users = cursor.fetchone()

    query_age = "SELECT count(age) FROM users where age = '(0-2)' or age = '(4-6)' or age = '(8-12)'"
    cursor.execute(query_age)
    ages0_12 = cursor.fetchone()

    query_age = "SELECT count(age) FROM users where age = '(15-20)'"
    cursor.execute(query_age)
    ages15_20 = cursor.fetchone()

    query_age = "SELECT count(age) FROM users where age = '(25-32)'"
    cursor.execute(query_age)
    ages25_32 = cursor.fetchone()

    query_age = "SELECT count(age) FROM users where age = '(38-43)'"
    cursor.execute(query_age)
    ages38_43 = cursor.fetchone()
    
    query_age = "SELECT count(age) FROM users where age = '(48-53)'"
    cursor.execute(query_age)
    ages48_53 = cursor.fetchone()

    query_age = "SELECT count(age) FROM users where age = '(60-100)'"
    cursor.execute(query_age)
    ages60_100 = cursor.fetchone()

    return {"users" : users, "0-14": ages0_12,"15-20": ages15_20, "25-32": ages25_32, "38-43": ages38_43, "48-53": ages48_53, "60-100": ages60_100}

def get_emotions():
    db = connect_to_db()
    cursor = db.cursor()

    query_interested = "SELECT count(emotion) FROM users where emotion = 'Felicidad' or emotion = 'Sorpresa'"
    cursor.execute(query_interested)
    interested = cursor.fetchone()

    query_not_interested = "SELECT count(emotion) FROM users where emotion = 'Ira' or emotion = 'Enojo' or emotion = 'Tristeza'"
    cursor.execute(query_not_interested)
    not_interested = cursor.fetchone()

    query_emotion = "SELECT count(emotion) FROM users where emotion = 'Neutral'"
    cursor.execute(query_emotion)
    neutral = cursor.fetchone()

    query_emotion = "SELECT count(emotion) FROM users where emotion = 'Felicidad'"
    cursor.execute(query_emotion)
    felicidad = cursor.fetchone()

    query_emotion = "SELECT count(emotion) FROM users where emotion = 'Sorpresa'"
    cursor.execute(query_emotion)
    sorpresa = cursor.fetchone()

    query_emotion = "SELECT count(emotion) FROM users where emotion = 'Ira'"
    cursor.execute(query_emotion)
    ira = cursor.fetchone()

    query_emotion = "SELECT count(emotion) FROM users where emotion = 'Enojo'"
    cursor.execute(query_emotion)
    enojo = cursor.fetchone()

    query_emotion = "SELECT count(emotion) FROM users where emotion = 'Tristeza'"
    cursor.execute(query_emotion)
    tristeza = cursor.fetchone()

    return {"Interested" : interested, "Not Interested" : not_interested, "Neutral": neutral,"Felicidad": felicidad, "Sorpresa": sorpresa, "Ira": ira, "Enojo": enojo, "Tristeza": tristeza}
