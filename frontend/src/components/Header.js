import React from 'react'
import Container from 'react-bootstrap/Container';
import { useDispatch , useSelector} from 'react-redux'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/Useractions';
function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () =>{
    dispatch(logout())
  }
  return (
    <header>
          <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        
      
            <Navbar.Brand as={Link} to='/'>ProShop</Navbar.Brand>
      
        
        
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          
           
             <Nav.Link as={Link} to='/cart'><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
          
           {userInfo ? (
            <NavDropdown title={userInfo.username } id='username'>
              <Nav.Link >
                <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
              </Nav.Link>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
           ):
           <Nav.Link as={Link} to='/login'><i className='fas fa-user'></i>Login</Nav.Link>
           }
            
            
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header