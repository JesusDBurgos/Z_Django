import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataUser from './DataUser';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
  
function CreateUser() {
  
    // Making usestate for setting and
    // fetching a value in jsx
    
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [emotion, setEmotion] = useState("");
    const [dateCreated, setDate] = useState("");
  
    // Using useNavigation for redirecting to pages
    let history = useNavigate();
  
    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault();  // Prevent reload
  
        const ids = uuid() // Creating unique id
        let uni = ids.slice(0, 8) // Slicing unique id
  
        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = age, b = gender, c = emotion, d = dateCreated
        DataUser.push({ id: uni, Age: a, Gender: b, Emotion: c, DateCreated: d})
  
        // Redirecting to home page after creation done
        history('/')
    }
  
    return (
        <div >
            <Form className="d-grid gap-2" 
                style={{ margin: '15rem' }}>
  
                {/* Fetching a value from input textfield 
                    in a setAge using usestate*/}
                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setAge(e.target.value)}
                        type="text"
                        placeholder="Edad" required />
                </Form.Group>
  
                {/* Fetching a value from input textfield in
                    a setGender using usestate*/}
                <Form.Group className="mb-3" 
                    controlId="formBasicGender">
                    <Form.Control onChange=
                        {e => setGender(e.target.value)}
                        type="text"
                        placeholder="Genero" required />
                </Form.Group>

                {/* Fetching a value from input textfield 
                    in a setEmotion using usestate*/}
                <Form.Group className="mb-3" 
                    controlId="formBasicEmotion">
                    <Form.Control onChange=
                        {e => setEmotion(e.target.value)}
                        type="text"
                        placeholder="Emoción" required />
                </Form.Group>
  
                {/* Fetching a value from input textfield in
                    a setDate using usestate*/}
                <Form.Group className="mb-3" 
                    controlId="formBasicDate">
                    <Form.Control onChange=
                        {e => setDate(e.target.value)}
                        type="text"
                        placeholder="Fecha" required />
                </Form.Group>
  
                {/* handing a onclick event in button for
                    firing a function */}
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="primary" type="submit">
                    Submit
                </Button>
  
                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to='/'>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    )
}
  
export default CreateUser