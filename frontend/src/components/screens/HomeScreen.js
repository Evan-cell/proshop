import React,{useState,useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import PProduct from '../PProduct'
import products from '../products'
import { listProducts } from '../../actions/ProductsActions'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../Loader'
import Message from '../Message'
function HomeScreen() {

const dispatch = useDispatch()

const productList = useSelector(state => state.productList)

const{error,loading,products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  
  return (
    <div>
        <h1>latest products</h1>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>  : 
                <Row>
                {products.map(products =>(
                    <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                        <PProduct product={products} />
                    </Col>
                ))}
            </Row>
        }

    </div>
  )
}

export default HomeScreen