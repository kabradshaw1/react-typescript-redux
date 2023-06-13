import React from "react";
import Row from 'react-bootstrap/Row';
import useSWR from 'swr';
import { fetcher } from '../../../utils/axios';
import Table from '../../components/Table';
import Container from 'react-bootstrap/Container';
import { Data } from '../../../utils/types'

interface Demo {
  id: number,
  active: string,
  heart: string,
  created: Date,
  steps: string,
  weight: string,
}

const FitnessHome: React.FC = () => {
  const {data: demo, error, isLoading } = useSWR<Demo[] | undefined>('/fitness/demo/', fetcher);
    // Transform the data into an array of FitnessData objects
  console.log(demo)
  if(error) return <Container><h3>Failed to load.</h3></Container>
  if(isLoading) return <Container><h3>Loading...</h3></Container>
  if(!demo) return null;

  const activeData: Data[] = demo && demo.map(item => ({
    created: item.created,
    data: item.active,
  }));
  const heartData: Data[] = demo && demo.map(item => ({
    created: item.created,
    data: item.heart,
  }));
  const stepsData: Data[] = demo && demo.map(item => ({
    created: item.created,
    data: item.steps,
  }));
  const weightData: Data[] = demo && demo.map(item => ({
    created: item.created,
    data: item.weight,
  }));
  console.log(activeData)
  return (
    <Container>
      <Row>
        <Table data={activeData}/>
      </Row>
    </Container>
  )
};

export default FitnessHome;