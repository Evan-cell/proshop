import React from 'react'
import {Row, Col} from 'react-bootstrap'
import PProduct from '../PProduct'
import products from '../products'
function HomeScreen() {
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