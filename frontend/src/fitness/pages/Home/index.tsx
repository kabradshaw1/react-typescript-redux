import React from "react";
import Row from 'react-bootstrap/Row';
import useSWR from 'swr';
import { fetcher } from '../../../utils/axios';
import Table from '../../components/Table';
import Container from 'react-bootstrap/Container';

interface Demo {
  active: string,
  heart: string,
  date: Date,
  steps: string,
  weight: string,
}
const FitnessHome: React.FC = () => {
  const {data: demo, error, isLoading } = useSWR<Demo[]>('/fitness/demo/', fetcher);
  if(error) return <Container><h3>Failed to load.</h3></Container>
  if(isLoading) return <Container><h3>Loading...</h3></Container>
  return (
    <Container>
      <Row>
        <h1>Fitness Home</h1>
      </Row>
    </Container>
  )
};

export default FitnessHome;