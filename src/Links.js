import React from "react";
import { 
  Navbar, 
  Nav,
  Dropdown,
  Container } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";


const Links = () => {

  return (
    <>
      <div >
      <Container>
      <Navbar  variant="light" className="d-flex flex-wrap align-items-center justify-content-between py-2 mb-1 border-bottom" >
          <LinkContainer to="/">
            <Navbar.Brand className="fs-4">DashBoad</Navbar.Brand>
          </LinkContainer>

          <Dropdown >
       <Dropdown.Toggle variant="dark" id="dropdown-basic" className="w-150" size="sm">
            Menu
      </Dropdown.Toggle>

  <Dropdown.Menu>
    <LinkContainer to="/">
      <Dropdown.Item>Home</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to="/Works">
      <Dropdown.Item>Works</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to="/About">
      <Dropdown.Item>About</Dropdown.Item>
      </LinkContainer>
  </Dropdown.Menu>
</Dropdown>
</Navbar>
      </Container>
      </div>
    </>
  )
}

export default Links