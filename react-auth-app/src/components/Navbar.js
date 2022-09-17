import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logout } from './Logout';


const NavbarApp = () => {
  return (
    <Fragment>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="signup">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="/" onClick={ Logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </Fragment>
  )
}

export default NavbarApp
