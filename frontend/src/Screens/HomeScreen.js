import React, {useEffect, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import EventCard from '../components/Event';

import Product from '../components/Product'


const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      
      setProducts(data)
    }
    fetchProducts()
  } )

  //this function 
  return (
    <>
      <h1>Latest Products From eventbrite</h1>
      <Row>
        {products.map((p) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
            <EventCard />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen