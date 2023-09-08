import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ListUser() {

    const {id} = useParams();

    const [user, setUser] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8000/api/v1/users/'+id)
        .then(res => setUser(res.data.Result))
        .catch(err => console.log(err));
    })
  return (
    <div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <div className='d-flex align-items-center flex-column mt-5'>
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

export default ListUser