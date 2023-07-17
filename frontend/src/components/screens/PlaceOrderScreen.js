import React,{useState,useEffect} from 'react'
import { Button,Row, Col, ListGroup,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../Message'
import FormContainer from '../FormContainer'
import { savePaymentMethod } from '../../actions/CartActions'
import CheckoutSteps from '../CheckoutSteps'


function PlaceOrderScreen() {
    const cart = useSelector(state => state.cart)
    cart.itemsPrice = cart.cartItems.reduce((acc,item)=>acc + item.price * item.qty,0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)
    cart.taxPrice = ((0.082) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    const placeOrder = () =>{
        console.log('placeOrder')
    }
  return (
    
    <div>
        <CheckoutSteps step1 step2 step3 step4/>
        <Row>
            <Col md={8}>
                <ListGroup.Item variant='flush'>
                    <h2>shipping</h2>
                    <p>
                        <strong>Shipping:</strong>
                        {cart.shippingAddress.address},{cart.shippingAddress.city},
                        {''}
                        {cart.shippingAddress.postalCode},
                        {''}
                        {cart.shippingAddress.country}
                    </p>
                </ListGroup.Item>
                <ListGroup.Item variant='flush'>
                    <h2>PaymentMethod</h2>
                    <p>
                    <strong>Method:</strong>
                    {cart.paymentMethod}
                    </p>

                </ListGroup.Item>
                <ListGroup.Item >
                    <h2>Order items</h2>
                    {cart.cartItems.length === 0 ? <Message variant='info'>your cart is empty</Message>:
                    <ListGroup variant='flush'>
                        {cart.cartItems.map((item,index)=>(
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={1}>
                                    <Image src={item.image} fluid rounded/>
                                    </Col>
                                    <Col>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={4}>
                                        {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>}

                </ListGroup.Item>
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Order summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>items:</Col>
                                <Col>${cart.itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>shipping:</Col>
                                <Col>${cart.shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Tax:</Col>
                                <Col>${cart.taxPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Total:</Col>
                                <Col>${cart.totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cart.cartItems === 0}
                            onClick={placeOrder}>
                                Place Order
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default PlaceOrderScreen