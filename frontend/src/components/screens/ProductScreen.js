import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import products from '../products'
import {Row,Col,Image,Form,ListGroup,Button,Card} from 'react-bootstrap'
import Rating from '../Rating'
import { listProductsDetails } from '../../actions/ProductsActions'
import Loader from '../Loader'
import Message from '../Message'
function ProductScreen({match}) {
    const [qty, setQty] = useState(1)


   const dispatch = useDispatch()
   const productDetails = useSelector(state => state.productDetails)
   const { loading,error,product} = productDetails

    useEffect(() => {
        dispatch(listProductsDetails(match.params.id))
    }, [])
    
  return (
    <div>
        <Link to='/' className='btn btn-light my-3 rounded'>Go back</Link>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>  : 
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/> 
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value='product.rating' text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        price : ${product.price}
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup.Item>
                        description : {product.description}
                    </ListGroup.Item>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                {product.countInStock > 0 ? 'Instock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
}
    </div>
  )
}

export default ProductScreen