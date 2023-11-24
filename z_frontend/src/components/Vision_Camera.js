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
        borderBottom: '1px solid black',
        backgroundColor: '#1b0527',
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '30px',
        boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)'

    }

    const styleBodyLogo = {
        paddingTop: '10px',
        height: '28rem',
        overflowY: 'a',
        overflowX: 'hidden',

    }

    return (
        <><h1 className="bg-info text-center font-monospace fw-bold lh-base">Tracking de usuarios</h1>
            <div className="d-flex flex-wrap justify-content-evenly" style={{ marginTop: '3rem' }}>

                <div className="">
                    <br></br>
                    <div className="">

                        <div className="cardHeader text-white" style={styleHeaderLogo}>
                            <h4 style={{ marginBottom: '0px' }}>
                                <center>Virtual Assistant</center>
                            </h4>
                        </div>
                        <br></br>
                        <div className="cardBody" style={styleBodyLogo}>
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

                    <div className="">
                        <Webcam
                            audio={false}
                            height={480}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={640}
                        />
                        <div className='col-md-20 row position-relative justify-content-center'><button>Captura</button></div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Vision_Camera