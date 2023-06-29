import React,{useState,useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../FormContainer'

function ShippingScreen({history}) {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = () =>{
        console.log('submitted')
    }
  return (
    <FormContainer>
        <h1>shipping</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
                required
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            >
            </Form.Control>
        </Form.Group

        </Form>
    </FormContainer>
  )
}

export default ShippingScreen