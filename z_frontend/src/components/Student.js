import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Student() {

  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8000/api/v1/users')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/api/v1/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Lista de Usuarios</h3>
      </div>
      <Link to="/create" className='btn btn-success me-2'>Agregar usuario nuevo</Link>
      <div className='mt-3'>
        <table className='table'>
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
            {data.map((Student, index) => {
              return <tr key={index}>
                  <td>{Student.age}</td>
                  <td>{Student.gender}</td>
                  <td>{Student.emotion}</td>
                  <td>{Student.DateCreated}</td>
                  <td>
                    <Link to={'http://localhost:8000/api/v1/update/'+Student.id} className='btn btn-primary btn-sm me-2'>Editar</Link>
                    <button onClick={e => handleDelete(Student.id)} className='btn btn-sm btn-danger'>Eliminar</button>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student