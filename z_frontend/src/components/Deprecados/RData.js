import React, { useEffect, useState } from "react";
import axios from "axios";

function RData() {

    const [User, setUser] = useState();
 
    const baseurl = "http://localhost:8000/";
 
    useEffect(() => {
        axios.get(`${baseurl}api/v1/users/`).then((response) => {
            setUser(response.data);
            //setLoading(false);
        });
    }, []);  
    
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "grey",
            }}
        >
            <h5>ID Usuario: </h5>
            <div>{User.id}</div>
            <h5>Edad Usuario: </h5>
            <div>{User.age}</div>
            <h5>ID Usuario: </h5>
            <div>{User.gender}</div>
            <h5>ID Usuario: </h5>
            <div>{User.emotion}</div>
            
        </div>
    );

}

export default RData;