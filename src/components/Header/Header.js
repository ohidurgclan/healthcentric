import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header-section d-flex">
        <Container>
            <div className="header-content d-flex justify-content-between">
            <div className="logo">
              <h1><Link exact to="/">HealthCentric</Link></h1>
            </div>
            <div className="d-flex nav-bar">
              <NavLink exact to="/" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>Home</NavLink>
              <NavLink to="/about" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>About</NavLink>
              <NavLink to="/services" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>Services</NavLink>
              <NavLink to="/doctor" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>Doctors</NavLink>
              <NavLink to="/contact" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>Contact</NavLink>
            </div>
            </div>
        </Container>
      </header>
    );
};

export default Header;