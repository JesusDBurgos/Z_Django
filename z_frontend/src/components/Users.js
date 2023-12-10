import React, { useState, useEffect, useRef } from "react";
//import { Link } from 'react-router-dom'

//Ruta de conexión de datos CORS
const API = process.env.REACT_APP_API;

export const Users = () => {

  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [emotion, setEmotion] = useState("");
  const [DateCreated, setDate] = useState("");

  const [editing, setEditing] = useState(false);


  const nameInput = useRef(null);  //Revisar

  let [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(API);

    if (!editing) {
      const res = await fetch(`${API}/api/v1/users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          id,
          age,
          gender,
          emotion,
          DateCreated
        }),
      });
      const data = await res.json();
      //console.log(data)
      //result => setUsers(result.data);
    } else {
      const res = await fetch(`${API}/api/v1/users/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          age,
          gender,
          emotion,
          DateCreated
        }),
      });
      const data = await res.json();
      //console.log(data)
      //result => getUsers(result.data);
      setEditing(false);
      setId("");
    }
    await getUsers();
    setId("");
    setAge("");
    setGender("");
    setEmotion("");
    setDate("");
    nameInput.current.focus();
  };

  const getUsers = async () => {
    const res = await fetch(`${API}/api/v1/users`)
    const data = await res.json();
    setUsers(data.map(user => ({ ...user, id: user[0] })));
    //setUsers(data)
  };

  const deleteUser = async (id) => {
    const userResponse = window.confirm("¿Esta seguro que desea eliminar este usuario?");
    if (userResponse) {
      try {
        const res = await fetch(`${API}/api/v1/users/delete/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        console.log(data)
        await getUsers();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  //Revisar que endpoint es el adecuado a esta función
  const editUser = async (id) => {
    const res = await fetch(`${API}/api/v1/users/update/${id}`);
    const data = await res.json();
    //console.log(data)
    //result => getUsers(result.data);

    setEditing(true);
    setId(data.id);

    // Reset
    setAge(data.age);
    setGender(data.gender);
    setEmotion(data.emotion);
    setDate(data.dateCreated);
    nameInput.current.focus();
  };

  useEffect(() => {
    getUsers();
  }, []);

  //console.log(users)

  const JUsers = users.map((user,key) =>
    <tr key={key}>
        <td>{user.id}</td>
        <td>{user[1]}</td>
        <td>{user[2]}</td>
        <td>{user[3]}</td>
        <td>{user[4]}</td>
        <td>
            {/* <button onClick={e => editUser(user.id)} className='btn btn-secondary btn-sm btn-block me-2'>Actualizar</button> */}
            <button onClick={e => deleteUser(user.id)} className='btn btn-danger btn-sm btn-block me-2'>Eliminar</button>
        </td>
      </tr>
    )

  return (
    <><h1 className="bg-info text-center font-monospace fw-bold lh-base">Administración de usuarios</h1> 
    <div className="d-flex flex-wrap justify-content-evenly" style={{ marginTop: '3rem' }}>
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
              placeholder="Fecha de creación Ej:28-02-2016  (día-mes-año)"
            />
          </div>
          <button className="btn btn-dark btn-block"> 
            {editing ? "Update" : "Crear Usuario"}    
          </button>
        </form>
      </div>
      <div className="col-md-7">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Index</th>
              <th>Edad</th>
              <th>Genero</th>
              <th>Emoción Detectada</th>
              <th>Fecha creación</th>
              <th>Operaciones</th>
            </tr>
          </thead>
          <tbody exact='true'>
            {JUsers}
          </tbody>
        </table>
      </div>
     </div>
     </>
  );
};

export default Users;