import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Products from '../product';
import { Row, Col } from 'react-bootstrap';
import ProductScreen from './ProductScreen';
import EcomHeader from '../components/EcomHeader';
import Navbar from '../components/Navbar';

const EcomHomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <Navbar />
    <EcomHeader/>
      <Row>

        {products.map((product) => (
          <Col key={product._id} md={3}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default EcomHomeScreen;
