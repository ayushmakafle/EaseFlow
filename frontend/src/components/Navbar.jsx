import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

const MainNavbar = () => {
  return (
    
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 px-4">
      <Navbar.Brand href="#home">Ease Flow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#appointment">Gynecologist Appointment</Nav.Link>
          <Nav.Link href="#chatbot">Chatbot Assistance</Nav.Link>
          <Nav.Link href="#tracking">Menstruation Tracking</Nav.Link>
          <Nav.Link href="/ecommerce">Menstrual Health Products</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
