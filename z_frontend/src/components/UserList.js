import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  

//Ruta de conexión de datos CORS
//const API = process.env.REACT_APP_API;

const API_url = 'http://127.0.0.1:8000';

class UserList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           users:[],  
           response: {}  
              
        }  
    }  
  
    componentDidMount(){  
       axios.get(API_url + '/api/v1/users').then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    users:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    deleteUser(userId) {  
      const { users } = this.state;     
     axios.delete(API_url + '/api/v1/users/delete/' + userId).then(result=>{  
       alert(result.data);  
        this.setState({  
          response:result,  
          users:users.filter(user=>user.UserId !== userId)  
        });  
      });  
    }  
  
    render(){         
        const{error,users}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {  
            return(  
         <div>  
                      
                  <Table>  
                    <thead className="btn-primary">  
                      <tr>  
                        <th>Edad</th>
                        <th>Genero</th>
                        <th>Emoción</th>
                        <th>Fecha creación</th> 
                      </tr>  
                    </thead>  
                    <tbody>  
                      {users.map(user => (  
                        <tr key={user.UserId}>  
                          <td>{user.Age}</td>  
                          <td>{user.Gender}</td>  
                          <td>{user.Emotion}</td>  
                          <td>{user.DateCreated}</td>    
                          <td><Button variant="info" onClick={() => this.props.editUser(user.UserId)}>Editar</Button>       
                          <Button variant="danger" onClick={() => this.deleteUser(user.UserId)}>Eliminar</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table>  
                </div>  
              )  
        }  
    }  
}  
  
export default UserList;