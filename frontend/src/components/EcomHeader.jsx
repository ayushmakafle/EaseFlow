import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

const EcomHeader = () => {
  return (
    <>
      <Navbar expand="lg" bg="primary" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Products</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="danger">Search</Button>
              </Form>
            <LinkContainer to='/whyshophere'>
              <Navbar.Brand>Why Shop at EaseFlow?</Navbar.Brand>
            </LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default EcomHeader;
