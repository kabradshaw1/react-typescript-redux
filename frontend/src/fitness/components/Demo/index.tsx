import React from "react";
import Row from 'react-bootstrap/Row';
import useSWR from 'swr';
import { fetcher } from '../../../utils/axios';
import Table from '../../components/Table';
import { Data } from '../../../utils/types';

interface Demo {
  id: number,
  active: number,
  heart: number,
  created: string,
  steps: number,
  weight: number,
}

const Demo: React.FC = () => {
  const {data: demo, error, isLoading } = useSWR<Demo[] | undefined>('/fitness/demo/', fetcher);
  console.log(demo)
  if(error) return <h3>Failed to load.</h3>
  if(isLoading) return <h3>Loading...</h3>
  if(!demo) return null;

  // const activeData: Data[] = demo && demo.map(item => ({
  //   created: item.created,
  //   data: item.active,
  //   id: item.id
  // }));
  // const heartData: Data[] = demo && demo.map(item => ({
  //   created: item.created,
  //   data: item.heart,
  //   id: item.id
  // }));
  // const stepsData: Data[] = demo && demo.map(item => ({
  //   created: item.created,
  //   data: item.steps,
  //   id: item.id
  // }));
  // const weightData: Data[] = demo && demo.map(item => ({
  //   created: item.created,
  //   data: item.weight,
  //   id: item.id
  // }));

  return (
  <Row>
    {/* <h2>Active Energy</h2>
    <Table data={activeData}/>
    <h2>Weight</h2>
    <Table data={weightData}/>
    <h2>Steps</h2>
    <Table data={stepsData}/>
    <h2> Max Heart Rate</h2>
    <Table data={heartData}/> */}
  </Row>
  )
};

export default Demo;