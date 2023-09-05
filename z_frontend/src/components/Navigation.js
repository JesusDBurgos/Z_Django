
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
import logoEd from '../static/Bot_IA.png'
import "../App.css";


const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logoEd}
              width="40"
              height="50"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />{' '}
            <strong>Asistente Virtual Robótico: Edison Robot</strong>
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
            <NavLink exact to="/API_conect" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="camera">Conexión API</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/CreateUsers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Crear usuarios</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ListUsers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Listar usuarios</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/manage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="archive-fill">Administrar usuarios</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
    
  );
};

export default Navigation;