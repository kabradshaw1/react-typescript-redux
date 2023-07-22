import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const PortfolioHeader: React.FC = () => {
  return (
    <Navbar as='header' bg='light' expand="lg" className='sticky-top subheader'>
      <Container fluid>
        <LinkContainer to=''>
          <Navbar.Brand>Bio & Project Links</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  )
};

export default PortfolioHeader;