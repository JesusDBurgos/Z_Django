import React, { useState, useEffect, useRef } from "react";

//Ruta de conexión de datos CORS
const API = process.env.REACT_APP_API;

export const Users = () => {

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [emotion, setEmotion] = useState("");
  const [DateCreated, setDate] = useState("");

  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");

  const nameInput = useRef(null);  //Revisar

  let [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(API);

    if (!editing) {
      const res = await fetch(`${API}/api/v1/users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          age,
          gender,
          emotion,
          DateCreated
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`${API}/api/v1/users/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age,
          gender,
          emotion,
          DateCreated
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getUsers();
    setAge("");
    setGender("");
    setEmotion("");
    setDate("");
    nameInput.current.focus();
  };

  const getUsers = async () => {
    const res = await fetch(`${API}/api/v1/users`);
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    const userResponse = window.confirm("¿Esta seguro que desea eliminar este usuario?");
    if (userResponse) {
      const res = await fetch(`${API}/api/v1/users/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      await getUsers();
    }
  };

  //Revisar que endpoint es el adecuado a esta función
  const editUser = async (id) => {
    const res = await fetch(`${API}/api/v1/users/update/${id}`);
    const data = await res.json();

    setEditing(true);
    setId(id);

    // Reset
    setAge(data.age);
    setGender(data.gender);
    setEmotion(data.emotion);
    setDate(data.DateCreated);
    nameInput.current.focus();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return ( 
    <div className="row" style={{ marginTop: '6rem' }}>
      <br></br> 
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              className="form-control"
              placeholder="Edad del usuario"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="form-control"
              placeholder="Genero del Usuario Ej: M / F"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setEmotion(e.target.value)}
              value={emotion}
              className="form-control"
              placeholder="Emoción detectada"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setDate(e.target.value)}
              value={DateCreated}
              className="form-control"
              placeholder="Fecha de creación"
            />
          </div>
          <button className="btn btn-dark btn-block"> 
            {editing ? "Update" : "Crear Usuario"}    
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Edad</th>
              <th>Genero</th>
              <th>Emoción Detectada</th>
              <th>Fecha creación</th>
              <th>Operaciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.emotion}</td>
                <td>{user.DateCreated}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm btn-block"
                    onClick={(e) => editUser(user._id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    onClick={(e) => deleteUser(user._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Users;