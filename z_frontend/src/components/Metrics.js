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
  
  const Edades = users.map((Ed,key) =>
  <p key={key}>{Ed[1]}</p>
  )

  const Genero= users.map((Gen,key) =>
  <p key={key}>{Gen[2]}</p>
  )  


  const Emotions = users.map((Emo,key) =>
      <p key={key}>{Emo[3]}</p>
  )

function Conteo(props){
  
  const [Em_Neg, setEmNeg] = useState(0);
  const [Em_Pos, setEmPos] = useState(0);
  
  // eslint-disable-next-line
  const negativeEmotions = ['Tristeza', 'Enojo', 'Ira'];
  const Em = props.Em;

  useMemo(() => {
    Emotions.forEach(emo => {
      const emotion = emo.props.children;
      
      if(negativeEmotions.includes(emotion)) 
      {
        setEmNeg(prev => prev + 1);
      } else {
        setEmPos(prev => prev + 1); 
      }
    });
  }, [Emotions])

    if (Em)
     {
       return <h5>Total: {Em_Pos}</h5>
     }
    else
    {
       return <h5>Total: {Em_Neg}</h5>
    } 
  }

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 me-2'>
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
            <h4>Conversaciones</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Cantidad: </h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 me-2'>
          <div className='text-center pb-1'>
            <h4>Emociones Positivas</h4>
          </div>
          <hr />
          <div className=''>
            <Conteo Em={true}/>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 me-2'>
          <div className='text-center pb-1'>
            <h4>Emociones Negativas</h4>
          </div>
          <hr />
          <div className=''>
           <Conteo Em={false}/>
          </div>
        </div>  
      </div>
      <ul>{Edades}</ul>
      <br></br>
      <ul>{Genero}</ul>
      <br></br>
      <ul>{Emotions}</ul>
      <br></br>
    </div>
    
  )
}

export default Metrics