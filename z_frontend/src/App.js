//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
//Como se usa la version 5 de react-router-dom se cambia 
//Routes por Router
import {Switch, Route, Router} from 'react-router-dom';

import Navigation from "./components/Navigation";
import Home from "./components/Home";


function App() {
  return (
    //Importo el componente BrowserRouter para la barra lateral
    //y el componente de la barra de navegación
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>

  );
}

export default App;
