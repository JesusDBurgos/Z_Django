//import React from 'react'

import React, { useEffect, useState, useMemo } from 'react'
import PiesChart_Con from "./Graficos/PiesChart_Con";
import PiesChart_Ed from "./Graficos/PiesChart_Ed";
import PiesChart_Emo from "./Graficos/PiesChart_Emo";
import BarsChart_Conf from "./Graficos/BarsChart_Conf";

function Metrics() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch('http://localhost:8000/api/v1/users');
    const data = await res.json();
    //console.log(data)
    //console.log(data.length)

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="bg-info text-center font-monospace fw-bold lh-base">Trazabilidad de usuarios</h1>
      <div className='p-3 d-flex flex-wrap justify-content-around mt-3'>
        <div className='px-3 pt-2 border shadow-sm w-25 me-2'>
          <div className='text-center pb-1'>
            <h4>Usuarios</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Cantidad: {users && users[0] && users[0]["users"] && users[0]["users"][0]}
            </h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 me-2'>
          <div className='text-center pb-1'>
            <h4>Emociones Positivas</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {users && users[1] && users[1]["Interested"] && users[1]["Interested"][0]}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 me-2'>
          <div className='text-center pb-1'>
            <h4>Emociones Negativas</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {users && users[1] && users[1]["Not Interested"] && users[1]["Not Interested"][0]}</h5>
          </div>
        </div>
      </div>
      <br></br>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: '1rem', gap: "100px" }}>
        <div>
          <p className=""><b>Gráfico #1: </b>Usuarios conectados</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary " style={{ width: "450px", height: "225px" }}>
            <div style={{ width: "100%", height: "100%", padding: "10px 0" }}>
              {users && users[0] && users[0]["users"] && <PiesChart_Con usuarios={users[0]["users"][0]} />}
            </div>
          </div>
        </div>
        <div>
          <p className=""><b>Gráfico #2: </b>Rango de edades de usuarios</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{ width: "450px", height: "225px" }}>
            <div style={{ width: "100%", height: "100%", padding: "10px 0" }}>
              {users && <PiesChart_Ed edades={users} />}
            </div>
          </div>
        </div>
        <div>
          <p className=""><b>Gráfico #3: </b>Rango de emociones de usuarios</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary " style={{ width: "450px", height: "225px" }}>
            <div style={{ width: "100%", height: "100%", padding: "10px 0" }}>
              {users && <PiesChart_Emo emociones={users} />}
            </div>
          </div>
        </div>
        <div>
          <p className=""><b>Gráfico #4: </b>Confianza hacia el Bot</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{ width: "450px", height: "225px" }}>
            <div style={{ width: "100%", height: "100%", padding: "10px 0" }}>
              {users && <BarsChart_Conf interes={users} />}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Metrics