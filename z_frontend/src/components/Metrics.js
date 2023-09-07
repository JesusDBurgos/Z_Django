import React, { useEffect, useState } from 'react'

function Metrics() {

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Usuarios</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Cantidad: </h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Conversaciones</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Cantidad: </h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Emociones Positivas</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: </h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Emociones Negativas</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics