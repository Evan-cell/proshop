import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <header>
          <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        
        <Navbar.Brand >Proshop</Navbar.Brand>
        
        
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          
            <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
           
            
            <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header