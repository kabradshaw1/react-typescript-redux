import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import './index.css'


const StoreHeader: React.FC = () => {
  return (
    <Navbar as='header' bg='primary' expand="lg" className='sticky-top sub-header'>
      <Container>
        <LinkContainer to=''>
          <Navbar.Brand>Kyle's Store</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  )
};

export default StoreHeader;