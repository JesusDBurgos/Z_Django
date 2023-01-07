
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
//import logo from '../static/logo.png'
import logoE from '../static/Logo_Elaine.JPG'
import "../App.css";


const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logoE}
              width="40"
              height="50"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />{' '}
            Asistente Virtual Robótico: Edison Robot
        </Navbar.Brand>
    </Navbar>
    <div className='sidebar'>
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Ruta de Navegación
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Elaine_Assistant" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="smile">Conversación</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Vision_camera" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="camera">Detección</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/students" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Listar usuarios</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/manage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Administrar usuarios</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
    
  );
};

export default Navigation;