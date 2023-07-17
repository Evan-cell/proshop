import React,{useState,useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../FormContainer'
import { savePaymentMethod } from '../../actions/CartActions'
import CheckoutSteps from '../CheckoutSteps'


function PaymentScreen({history}) {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    if(!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

  return (
    <FormContainer>
        <CheckoutSteps step1 step2 step3/>

        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>select method</Form.Label>
                <Col>
                <Form.Check
                type='radio'
                label='Paypal or Credit Card'
                id='paypal'
                name='paymentMethod'
                checked
                onChange={(e)=>setPaymentMethod(e.target.value)}
                >

                </Form.Check>
                </Col>
            </Form.Group>
            <Button type='submit' variant='primary'>continue</Button>
        </Form>
    </FormContainer>
  )
}



export default PaymentScreen
