//Librerías de estados en React
import React from 'react';
import { useState } from "react";

import DataUser from './DataUser';


function RData() {
    const listUsers = DataUser.map(Duser =>
      <li key={Duser.id}>
        <p>
            El usuario tiene una emoción de <b>{Duser.Emotion}</b>
            , tiene una edad de {' ' + Duser.Age + ' '} años, 
            un genero {' ' + Duser.Gender + ' '} (F:Femenino/M:Masculino) y
            participo en el app el día: {' ' + Duser.DateCreated + ' '}
        </p>
      </li>
    );
    const Rusers = DataUser.map(Duser =>
      <tr key={Duser.id}>
          <td>{Duser.id}</td>
          <td>{Duser.Age}</td>
          <td>{Duser.Gender}</td>
          <td>{Duser.Emotion}</td>
          <td>{Duser.DateCreated}</td>
          <td>
          <button className='btn btn-secondary btn-sm btn-block me-2'>Actualizar</button>
          <button className='btn btn-danger btn-sm btn-block me-2'>Eliminar</button>
          </td>
      </tr>  
    );
    return (
      <div className="App container m-4">
        <div className="row" style={{ marginTop: '4rem' }}>
         <div className="text-center">
           <h1>Trayendo datos al frontend React.</h1>
           <ul>{listUsers}</ul>
         </div>
         <div className="col-md-8" >   
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Index</th>
                <th>Edad</th>
                <th>Genero</th>
                <th>Emoción detectada</th>
                <th>Fecha de creación</th>
                <th>Operaciones</th>
              </tr>
            </thead>
            <tbody>
              {Rusers}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  }
  
  export default RData;