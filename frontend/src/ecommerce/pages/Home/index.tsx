import React from 'react';
import AllItems from '../../components/AllItems';
import ShoppingCart from '../../components/ShoppingCart';
import StoreHeader from '../../components/Header';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const StoreHome: React.FC = () => {
  return (
    <>
    <StoreHeader/>
      <Row>
        <Col>
          <AllItems/>
        </Col>
        <Col lg={3}>
          <ShoppingCart/>
        </Col>
      </Row>
      </>
  )
};

export default StoreHome;
