//import logo from './logo.svg';
//import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//No se permite usar Switch
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Vision_Camera from './components/Vision_Camera';
import ReadAPI  from './components/ReadAPI';
import ListUser from './components/ListUser';
import Users  from './components/Users';
import Metrics from './components/Metrics';



function App() {
  return (
    //Importo el componente BrowserRouter para la barra lateral
    //y el componente de la barra de navegación
    <BrowserRouter>
      <Navigation />
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/Elaine_Assistant" element={<Chatbot/>} />
         <Route path="/Vision_camera" element={<Vision_Camera/>} />
         <Route path="/API_conect" element={<ReadAPI/>} />
         <Route exact path="/List" element={<ListUser/>} />
         <Route path="/Manage" element={<Users/>} />
         <Route path="/Metrics" element={<Metrics/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
