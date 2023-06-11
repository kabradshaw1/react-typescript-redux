import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const PortfolioHeader: React.FC = () => {
  return (
    <Navbar as='header' bg='primary' expand="lg" className='sticky-top'>
      <Container>
        <LinkContainer to=''>
          <Navbar.Brand>Kyle's Bio & Project Links</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  )
};

export default PortfolioHeader;