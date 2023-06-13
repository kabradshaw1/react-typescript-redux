import React from "react";
import Row from 'react-bootstrap/Row';
import useSWR from 'swr';
import { fetcher } from '../../../utils/axios';
import Table from '../../components/Table';
import Container from 'react-bootstrap/Container';
import { Data } from '../../../utils/types'

interface Demo {
  id: number,
  active: number,
  heart: number,
  created: string,
  steps: number,
  weight: number,
}

const FitnessHome: React.FC = () => {
  const {data: demo, error, isLoading } = useSWR<Demo[] | undefined>('/fitness/demo/', fetcher);

  if(error) return <Container><h3>Failed to load.</h3></Container>
  if(isLoading) return <Container><h3>Loading...</h3></Container>
  if(!demo) return null;

  const activeData: Data[] = demo && demo.map(item => ({
    created: item.created,
    data: item.active,
    id: item.id
  }));
  const heartData: Data[] = demo && demo.map(item => ({
    created: item.created,
    data: item.heart,
    id: item.id
  }));
  const stepsData: Data[] = demo && demo.map(item => ({
    created: item.created,
    data: item.steps,
    id: item.id
  }));
  const weightData: Data[] = demo && demo.map(item => ({
    created: item.created,
    data: item.weight,
    id: item.id
  }));

  return (
    <Container>
      <Row>
        <h1>Active Energy</h1>
        <Table data={activeData}/>
      </Row>
    </Container>
  )
};

export default FitnessHome;