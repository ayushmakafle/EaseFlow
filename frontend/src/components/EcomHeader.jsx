import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EcomHeader = () => {
  return (
    <>
      <Navbar expand="lg" bg="primary" collapseOnSelect>
        <Container>
          
          <Navbar.Brand href="#">Why Shop at EaseFlow?</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default EcomHeader;
