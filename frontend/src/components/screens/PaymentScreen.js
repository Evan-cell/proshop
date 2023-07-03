import React,{useState,useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../FormContainer'
// import { savePaymentMethod } from '../../actions/CartActions'
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
        // dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

  return (
    <div>PaymentScreen</div>
  )
}



export default PaymentScreen
