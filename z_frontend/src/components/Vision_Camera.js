import React from 'react';
//import {useState} from 'react';
import Webcam from "react-webcam";
import logoE from '../static/Logo_Elaine.JPG'


function Vision_Camera() {

    const webcamRef = React.useRef(null);
    //return <Webcam />;
    // eslint-disable-next-line

    const styleHeaderLogo = {
        height: '3.5rem',
        width: '225px',
        borderBottom : '1px solid black',
        backgroundColor: '#1b0527',
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '30px',
        boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)'

    }

    const styleBodyLogo = {
        paddingTop : '10px',
        height: '28rem',
        overflowY: 'a',
        overflowX: 'hidden',
        
    }

    return (
    <div>
        <div className="container">
            <br></br>   
            <div className="row position-relative justify-content-flex-start">

                    <div className="cardHeader text-white position-absolute top-0 start-0" style={styleHeaderLogo}>
                    <h4 style={{marginBottom:'0px'}}>
                          <center>Virtual Assistant</center>
                    </h4>
                    </div>
                    <br></br>
                    <div className="cardBody position-absolute top-100 start-0" style={styleBodyLogo}>
                        <img
                           src={logoE}
                           width="200"
                           height="300"
                           className="d-inline-block align-center"
                           alt="React Bootstrap logo"
                        />{' '}

                    </div>  
            </div>
        </div>

        <div>
         
        <div className="row position-relative justify-content-center">
             <header className="header">
                 <h3 className="row position-relative justify-content-center title">Vision Elaine App</h3>
             </header>
             <Webcam
              audio = {false}
	             height = {480}
                 ref = {webcamRef}
	             screenshotFormat = "image/jpeg"
	             width = {640}
	         />
          <div className='col-md-5 row position-relative justify-content-center'><button>Captura</button></div>
         </div>
        </div>
    </div>    
        
    )

}

export default Vision_Camera