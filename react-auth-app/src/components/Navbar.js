import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarApp = ({Logout, loggedIn}) => {

  return (
    <Fragment>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            { loggedIn ?
              <Nav.Link href="/" onClick={ Logout }>Logout</Nav.Link>
             :
             <Fragment>
                <Nav.Link href="signup">Register</Nav.Link>
                <Nav.Link href="login">Login</Nav.Link>
             </Fragment>

            }
          </Nav>
        </Container>
      </Navbar>

    </Fragment>
  )
}

export default NavbarApp
