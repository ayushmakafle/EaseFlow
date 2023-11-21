import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <>
          <Navbar expand="lg" bg="primary" collapseOnSelect>
              <Container>
                  <Navbar.Brand href="#">Why Shop at EaseFlow?</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav
                          className="ml-auto my-2 my-lg-0"
                      >
                          <Nav.Link href="#action1">Home</Nav.Link>
                          <Nav.Link href="#action2">Link</Nav.Link>
                          <Nav.Link href="#" disabled>
                              Link
                          </Nav.Link>
                      </Nav>
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
  )
}

export default Header
