import React from "react";
import Demo from '../../components/Demo';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import LoggedIn from '../../components/LoggedIn';

const FitnessHome: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.account);

  return (
      <Container>
        {isLoggedIn
          ? <LoggedIn/>
          : <Demo/>
        }
      </Container>
  )
};

export default FitnessHome;