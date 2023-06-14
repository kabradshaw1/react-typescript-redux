import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const FitnessHeader: React.FC = () => {
  return (
    <Navbar as='header' bg='primary' expand="lg" className='sticky-top sub-header'>
      <Container>
        <LinkContainer to=''>
          <Navbar.Brand>Kyle's Fitness</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  )
};

export default FitnessHeader;