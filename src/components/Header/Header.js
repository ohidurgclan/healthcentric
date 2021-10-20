import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () =>{
  const { users, logOut } = useAuth();
    return (
      <>
        <Navbar className="header-section" collapseOnSelect expand="lg">
          <Container>
            <Navbar className="logo" as={NavLink} to="/">Health<span>Centric</span></Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end nav-bar">
              <Nav.Link as={NavLink} to="/home" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/services" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>Services</Nav.Link>
              <Nav.Link as={NavLink} to="/doctor" activeStyle={{ fontWeight: "bold", color: "#1bbde4" }}>Doctors</Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" activeStyle={{ fontWeight: "bold", color: "#1bbde4" }}>Contact</Nav.Link>
              {users?.email ? <Button onClick={logOut} variant="light">Logout</Button> :
              <Nav.Link as={NavLink} to="/login" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>Login</Nav.Link>}
              <Navbar.Text>
                {users?.displayName}
              </Navbar.Text>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;