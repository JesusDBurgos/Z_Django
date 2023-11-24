//import axios from 'axios';
//import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'

//Petición con Fetch
function ListUser() {

  const [users, setUsers] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend

  const getUsers = async () => {
    const res = await fetch('http://localhost:8000/api/v1/users');
    //console.log(res)
    const data = await res.json();
    //console.log(data)
    //console.log(data.length)
    //const id = data[0];
    //console.log(id)
    //result => setUsers(result.data);

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  //console.log(users)  

  return (
    <><h1 className="bg-info text-center font-monospace fw-bold lh-base">Listado de usuarios</h1>
      <div className="d-flex flex-wrap justify-content-evenly" style={{ marginTop: '3rem' }}>
        <div className="col-md-10" >
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Index</th>
                <th>Edad</th>
                <th>Genero</th>
                <th>Emoción detectada</th>
                <th>Fecha creación</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) =>
                <tr key={key}>
                  <td>{user[0]}</td>
                  <td>{user[1]}</td>
                  <td>{user[2]}</td>
                  <td>{user[3]}</td>
                  <td>{user[4]}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

}
export default ListUser
