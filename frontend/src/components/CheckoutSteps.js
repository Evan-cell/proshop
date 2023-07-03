import React from 'react'
import  {LinkContainer} from 'react-router-bootstrap'
import { Nav} from 'react-bootstrap' 
import { Link } from "react-router-dom";
function CheckoutSteps({step1,step2,step3,step4}) {
  return (
    <Nav className='justify-content-center mb-4'>
        <Nav.Item>
            {step1 ? (
                           
                            <Nav.Link className='text-warning'   as={Link} to='/login'>Login</Nav.Link>
                        
            ):(
                <Nav.Link   disabled>Login</Nav.Link>
            )}

        </Nav.Item>
        <Nav.Item>
            {step1 ? (
                            
                            <Nav.Link className='text-warning'  as={Link} to='/shipping' >shipping</Nav.Link>
                        
            ):(
                <Nav.Link   disabled>shipping</Nav.Link>
            )}

        </Nav.Item>
        <Nav.Item>
            {step1 ? (
                            
                            <Nav.Link  className='text-warning' as={Link} to='/payment' >payment</Nav.Link>
                        
            ):(
                <Nav.Link disabled>payment</Nav.Link>
            )}

        </Nav.Item>
        <Nav.Item>
            {step1 ? (
                            
                            <Nav.Link className='text-warning' as={Link} to='/placeorder' >place order</Nav.Link>
                       
            ):(
                <Nav.Link disabled>place order</Nav.Link>
            )}

        </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps