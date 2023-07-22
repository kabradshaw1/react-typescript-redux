import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { RootState } from '../../../../../store';
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from 'react-redux';


const FitnessHeader: React.FC = () => {

  const dispatch = useDispatch();

  const fitness = useSelector((state:RootState) => state.fitness.value);
  const isLoggedIn = useSelector((state: RootState) => state.auth.account);

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