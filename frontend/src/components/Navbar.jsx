import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './MainNavbar.css'; // Import the CSS file for Navbar styling

const MainNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar">
      <Navbar.Brand href="#home">Ease Flow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#appointment">Gynecologist Appointment</Nav.Link>
          <Nav.Link href="#chatbot">Chatbot Assistance</Nav.Link>
          <Nav.Link href="/ecommerce">Menstrual Health Products</Nav.Link>
          <Nav.Link href='#'><i class="fa-solid fa-user"></i></Nav.Link>
          <Nav.Link href='#'><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
