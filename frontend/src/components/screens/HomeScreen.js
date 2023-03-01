import React,{useState,useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import PProduct from '../PProduct'
import products from '../products'
import axios from 'axios'
function HomeScreen() {
  const [products,setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts(){
      const { data } = await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  
  return (
    <div>
        <h1>latest products</h1>
        <Row>
            {products.map(products =>(
                <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                    <PProduct product={products} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen