import InputBox from "../InputBox";
import Table from "../Table";
import {Data} from '../../../utils/types';
import { fetcher } from '../../../utils/axios';
import useSWR from 'swr';
import Container from 'react-bootstrap/Container';

const LoggedIn: React.FC = () => {
  const {data: qty, error, isLoading } = useSWR<Data[]>(`/fitness/`, fetcher);
  if(error) return <Container><h3>Failed to load.</h3></Container>
  if(isLoading) return <Container><h3>Loading...</h3></Container>
  return (
    <h2>logged in</h2>
  )
}

export default LoggedIn;
