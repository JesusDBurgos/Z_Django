import React from 'react';
//import {useState} from 'react';
import Webcam from "react-webcam";

function Vision_Camera() {

    const webcamRef = React.useRef(null);
    //return <Webcam />;

    return (
        <div>

         <div className="App">
             <header className="header" style={{ margin: '3rem' }} >
                 <h3 className="title" >Vision Elaine App</h3>
             </header>
             <Webcam
              audio = {false}
	             height = {480}
                 ref = {webcamRef}
	             screenshotFormat = "image/jpeg"
	             width = {640}
	         />
         <div><button className='col-md-5 justify-content-center'>Captura</button></div>
         </div>
        </div>
        
    )

}

export default Vision_Camera