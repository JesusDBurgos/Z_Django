//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Users  from './components/Users';

function App() {
  return (
    //Importo el componente BrowserRouter para la barra lateral
    //y el componente de la barra de navegación
    <BrowserRouter>
      <Navigation />
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/Elaine_Assistant" element={<Chatbot/>} />
         <Route exact path="/Admin" element={<Users/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
