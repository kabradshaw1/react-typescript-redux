import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const FitnessHeader: React.FC = () => {
  return (
    <Navbar as='header' bg='light' expand="lg" className='sticky-top subheader'>
      <Container>
        <LinkContainer to=''>
          <Navbar.Brand>Fitness</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  )
};

export default FitnessHeader;