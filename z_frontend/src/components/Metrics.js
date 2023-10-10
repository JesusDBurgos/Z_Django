//import React from 'react'
import React, { useEffect, useState } from 'react'

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
  
  const Emotions = users.map((Emo,key) =>
      <p key={key}>{Emo[3]}</p>
    )

  var Em_Neg=0;
  var Em_Pos=0;

  console.log(Emotions)

  if (Emotions == 'Tristeza' || Emotions == 'Enojo' || Emotions == 'Ira' ){
    Em_Neg = Em_Neg + 1;
    console.log(Em_Neg)
  } else if (Emotions == 'Sorpresa' || Emotions == 'Felicidad' || Emotions == 'Neutral')
  {
    Em_Pos = Em_Pos + 1;
    console.log(Em_Pos) 
  };
  
  /*
  switch(Emotions){
    case 'Tristeza':
      Em_Neg = Em_Neg + 1;
      console.log(Em_Neg)
    case 'Enojo': 
      Em_Neg = Em_Neg + 1;
      console.log(Em_Neg)
    case 'Ira':
      Em_Neg = Em_Neg + 1;
      console.log(Em_Neg)
    case 'Sorpresa':
      Em_Neg = Em_Neg + 1;
      console.log(Em_Neg)
    case 'Felicidad': 
      Em_Pos = Em_Pos + 1;
      console.log(Em_Pos)
    case 'Neutral':
      Em_Pos = Em_Pos + 1;
      console.log(Em_Pos)
  }
  */

  //console.log(Emotions)

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
            <h5>Total: {Em_Pos}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 me-2'>
          <div className='text-center pb-1'>
            <h4>Emociones Negativas</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {Em_Neg}</h5>
          </div>
        </div>  
      </div>
      <ul>{Emotions}</ul>
    </div>
    
  )
}

export default Metrics