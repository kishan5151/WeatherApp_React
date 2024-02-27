import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

const NavB=()=>{
    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container className="container-fluid">
             <NavLink className="navele" to="./dshvfsd"><Navbar.Brand style={{marginLeft:"10px"}}>Rk<span style={{color:"#00fff3"}}> Technical</span></Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="navele" to="/">Home</NavLink>
                        <NavLink to="/weather" className="navele">Weather</NavLink>
                        <NavLink to="/info" className="navele">Information</NavLink>
                    </Nav>
                </Navbar.Collapse>
             </Container>
            </Navbar>
        
        </>
    );
}

export default NavB;