//import React from 'react'

import React, { useEffect, useState, useMemo } from 'react'

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

  const Edades = users.map((Ed, key) =>
    <p key={key}>{Ed[1]}</p>
  )

  const Genero = users.map((Gen, key) =>
    <p key={key}>{Gen[2]}</p>
  )


  const Emotions = users.map((Emo, key) =>
    <p key={key}>{Emo[3]}</p>
  )

  function Conteo(props) {

    const [Em_Neg, setEmNeg] = useState(0);
    const [Em_Pos, setEmPos] = useState(0);

    // eslint-disable-next-line
    const negativeEmotions = ['Tristeza', 'Enojo', 'Ira'];
    const Em = props.Em;

    useMemo(() => {
      Emotions.forEach(emo => {
        const emotion = emo.props.children;

        if (negativeEmotions.includes(emotion)) {
          setEmNeg(prev => prev + 1);
        } else {
          setEmPos(prev => prev + 1);
        }
      });
    }, [Emotions])

    if (Em) {
      return <h5>Total: {Em_Pos}</h5>
    }
    else {
      return <h5>Total: {Em_Neg}</h5>
    }
  }

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
            <h5>Cantidad: {users.length}
            </h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 me-2'>
          <div className='text-center pb-1'>
            <h4>Emociones Positivas</h4>
          </div>
          <hr />
          <div className=''>
            <Conteo Em={true} />
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 me-2'>
          <div className='text-center pb-1'>
            <h4>Emociones Negativas</h4>
          </div>
          <hr />
          <div className=''>
            <Conteo Em={false} />
          </div>
        </div>
      </div>
      {/* Aquí se visualizaban los valores obtenidos del fetch
      <ul>{Edades}</ul>
      <ul>{Genero}</ul>
      <ul>{Emotions}</ul>
      */}
      <br></br>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: '3rem', gap: "100px" }}>
        {/* Aquí incluiré las gráficas (un componente por cada ejemplo). */}

        <div>
          <p className="m-2"><b>Ejemplo #1: </b>Gráfico de usuarios conectados</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary " style={{ width: "450px", height: "225px" }}>
          </div>
        </div>
        <div>
          <p className="m-2"><b>Ejemplo #2: </b>Gráfico de confianza hacia el Bot</p>
          <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{ width: "450px", height: "225px" }}>
          </div>
        </div>

        {/* Aquí se incluye un gráfico más 
          #Línea de gráfico - <hr className="mt-3 mb-2"/>
          <div>
              <p className="m-2"><b>Ejemplo #3: </b>Gráfico circular</p>
              <div className="bg-light mx-auto border border-2 border-primary" style={{width:"450px", height:"250px"}}>
                  <div style={{width:"100%", height:"100%", padding:"10px 0"}}>                      
                  </div>
              </div>
          </div>
          */}

      </div>
    </div>



  )
}

export default Metrics