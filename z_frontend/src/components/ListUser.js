import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataUser from './DataUser';
import { Link, useNavigate } from 'react-router-dom';
  
function ListUser() {
  
    let history = useNavigate()
  
    // You may skip this part if you're
    // using react-context api or redux
    function setID(id, age, gender, emotion, dateCreated) {
        localStorage.setItem('id', id);
        localStorage.setItem('Age', age);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('Emotion', emotion);
        localStorage.setItem('DateCreated', dateCreated);
    }
  
    // Deleted function - functionality 
    // for deleting the entry
    function deleted(id) {
  
        var index = DataUser.map(function (e) { 
            return e.id; }).indexOf(id);
  
        // deleting the entry with index
        DataUser.splice(index, 1)
  
        // We need to re-render the page for getting 
        // the results so redirect to same page.
        history('/')
    }
  
    return (
        <div style={{ margin: '10rem' }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Edad</th>
                        <th>Genero</th>
                        <th>Emoción</th>
                        <th>Fecha creación</th>
                    </tr>
                </thead>
                <tbody>
  
                    {/* Mapping though every element 
                        in the array and showing the 
                        data in the form of table */}
                    {DataUser.map((item) => {
                        return (
                            <tr>
                                <td>{item.Age}</td>
                                <td>{item.Gender}</td>
                                <td>{item.Emotion}</td>
                                <td>{item.DateCreated}</td>
  
                                {/* getting theid,name, and 
                                    age for storing these
                                    value in the jsx with 
                                    onclick event */}
                                <td><Link to={`/edit`}>
                                    <Button onClick={(e) =>
                                    setID(item.id, item.Age, item.Gender, item.Emotion, item.DateCreated)} 
                                    variant="info">
                                    Update</Button></Link>
                                </td>
  
                                {/* Using thr deleted function passing
                                    the id of an entry */}
                                <td><Button onClick={e => deleted(item.id)}
                                    variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
  
            {/* Button for redirecting to create page for
                insertion of values */}
            <Link className="d-grid gap-2" to='/CreateUsers'>
                <Button className="btn btn-dark" variant="warning" size="lg">Create User</Button>
            </Link>
        </div>
    )
}
  
export default ListUser;