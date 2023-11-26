import './chatbot.css';
import React from 'react';
import { useEffect, useState } from 'react';

import { IoMdSend } from 'react-icons/io';
import { BiBot, BiUser } from 'react-icons/bi';

import Webcam from "react-webcam";

import logoE from '../static/Logo_Elaine.JPG'

function Chatbot() {

    const webcamRef = React.useRef(null);

    const [chat, setChat] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [botTyping, setbotTyping] = useState(false);


    useEffect(() => {

        console.log("called");
        const objDiv = document.getElementById('messageArea');
        objDiv.scrollTop = objDiv.scrollHeight;


    }, [chat])




    const handleSubmit = (evt) => {
        evt.preventDefault();
        const name = "shreyas";
        const request_temp = { sender: "user", sender_id: name, msg: inputMessage };

        if (inputMessage !== "") {

            setChat(chat => [...chat, request_temp]);
            setbotTyping(true);
            setInputMessage('');
            rasaAPI(name, inputMessage);
        }
        else {
            window.alert("Por favor ingrese un mensaje valido");
        }

    }


    const rasaAPI = async function handleClick(name, msg) {

        //chatData.push({sender : "user", sender_id : name, msg : msg});


        await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'charset': 'UTF-8',
            },
            credentials: "same-origin",
            body: JSON.stringify({ "sender": name, "message": msg }),
        })
            .then(response => response.json())
            .then((response) => {
                if (response) {
                    const temp = response[0];
                    const recipient_id = temp["recipient_id"];
                    const recipient_msg = temp["text"];


                    const response_temp = { sender: "bot", recipient_id: recipient_id, msg: recipient_msg };
                    setbotTyping(false);

                    setChat(chat => [...chat, response_temp]);
                    // scrollBottom();

                }
            })
    }

    console.log(chat);

    const styleImgElaine = {

    }

    const stylecard = {
        maxWidth: '35rem',
        border: '1px solid black',
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '30px',
        boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)'

    }
    const styleHeader = {
        height: '4.5rem',
        borderBottom: '1px solid black',
        borderRadius: '30px 30px 0px 0px',
        backgroundColor: '#1b0527',

    }
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
    const styleFooter = {
        //maxWidth : '32rem',
        borderTop: '1px solid black',
        borderRadius: '0px 0px 30px 30px',
        backgroundColor: '#1b0527',


    }
    const styleBody = {
        paddingTop: '10px',
        height: '28rem',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
    };
    const transparentBackground = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: `url("${logoE}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        opacity: 0.5,  // Ajusta el nivel de transparencia según tus necesidades
    };
    const styleBodyLogo = {
        paddingTop: '10px',
        height: '28rem',
        overflowY: 'a',
        overflowX: 'hidden',

    }

    return (
        <><h1 className="bg-info text-center font-monospace fw-bold lh-base">Chat de usuarios</h1>
            <div className="d-flex flex-wrap justify-content-evenly" style={{ marginTop: '3rem' }}>

                {/* <button onClick={()=>rasaAPI("shreyas","hi")}>Try this</button> 
                ###Codigo de Logo de Elaine    
                <br></br>

                <div className="">

                    <div className="cardHeader text-white" style={styleHeaderLogo}>
                        <h4 style={{ marginBottom: '0px' }}>
                            <center>Virtual Assistant</center>
                        </h4>
                    </div>
                    <br></br>
                    <div className="cardBody top-100 start-0" style={styleBodyLogo}>
                        <img
                            src={logoE}
                            width="200"
                            height="300"
                            className="d-inline-block align-center"
                            alt="React Bootstrap logo"
                        />{' '}

                    </div>

                </div>
                */}

                <div className="" style={{ width: "500px" }}>

                    <div className="card" style={stylecard} >

                        <div className="cardHeader text-white top-50 start-50" style={styleHeader}>
                            <h1 style={{ marginBottom: '0px' }}>
                                <center>Elaine Assistant</center>
                            </h1>
                            {botTyping ? <h6>  Elaine escribiendo...</h6> : null}

                        </div>
                        <div className="cardBody" id="messageArea" style={styleBody}>
                            <div style={transparentBackground}></div>
                            <div className="row msgarea" style={{position: "relative"}} >
                                {chat.map((user, key) => (
                                    <div key={key}>
                                        {user.sender === 'bot' ?
                                            (

                                                <div className='msgalignstart'>
                                                    <BiBot className="botIcon" /><h5 className="botmsg">{user.msg}</h5>
                                                </div>

                                            )

                                            : (
                                                <div className='msgalignend'>
                                                    <h5 className="usermsg">{user.msg}</h5><BiUser className="userIcon" />
                                                </div>
                                            )
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="cardFooter text-white" style={styleFooter}>
                            <div className="row">
                                <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
                                    <div className="col-10" style={{ paddingRight: '0px' }}>
                                        <input onChange={e => setInputMessage(e.target.value)} value={inputMessage} type="text" className="msginp"></input>
                                    </div>
                                    <div className="col-2 cola">
                                        <button type="submit" className="circleBtn" ><IoMdSend className="sendBtn" /></button>
                                    </div>
                                </form>
                            </div>
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
    );
}

export default Chatbot;