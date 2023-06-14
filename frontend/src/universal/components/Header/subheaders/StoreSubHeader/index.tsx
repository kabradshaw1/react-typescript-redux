import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const StoreHeader: React.FC = () => {
  return (
    <Navbar as='header' bg='light' expand="lg" className='sticky-top subheader'>
      <Container>
        <LinkContainer to=''>
          <Navbar.Brand>Store</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  )
};

export default StoreHeader;