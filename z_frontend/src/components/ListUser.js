//import axios from 'axios';
//import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//Petición con Fetch
function ListUser() {

    const [users, setUsers] = useState([]); 

    // Modify the current state by setting the new data to
    // the response from the backend

    const getUsers = async () => {
        const res = await fetch('http://localhost:8000/api/v1/users');
        const data = await res.json();
        console.log(data)
        //result => setUsers(result.data);
        setUsers(data);
      };
    
    useEffect(() => {
        getUsers();
      }, []);

    return (
     <div className="App container m-4">
        <div className="row" style={{ marginTop: '4rem' }}>
          <div className="text-center">
          <h1>Connectando el Frontend de React hacia el Backend de Flask.</h1>
          
        <div className="col-md-8" >   
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
          <tbody>
            {users.map(data => {
            return <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.emotion}</td>
                <td>{data.dateCreated}</td>
                <td>
                    <Link to={'http://localhost:8000/api/v1/users/delete/'+ data.id} className='btn btn-danger btn-sm me-2'>Eliminar</Link>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>
      );

}
export default ListUser


/* Petición con Axios
function ListUser() {

    const {id} = useParams();

    const [user, setUser] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8000/api/v1/users/'+{id})
        .then(res => setUser(res.data.Result))
        .catch(err => console.log(err));
    })
  return (
    <div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Id: {user.id}</h3>
                <h3>Edad: {user.age}</h3>
                <h3>Genero: {user.gender}</h3>
                <h3>Emocion: {user.emotion}</h3>
                <h3>Fecha_Creación: {user.dateCreated}</h3>
            </div>
            <div>
                <button className='btn btn-primary me-2'>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default ListUser */