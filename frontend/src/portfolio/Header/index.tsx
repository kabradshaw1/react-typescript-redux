import React from "react";
import Container from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const PortfolioHeader: React.FC = () => {
  return (
    <Navbar as='header' bg='secondary' expand="lg" className='sticky-top'>
        <LinkContainer to=''>
          <Navbar.Brand>Kyle's Bio & Project Links</Navbar.Brand>
        </LinkContainer>
    </Navbar>
  )
};

export default PortfolioHeader;