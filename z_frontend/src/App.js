//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import {BrowserRouter} from 'react-router-dom';

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
