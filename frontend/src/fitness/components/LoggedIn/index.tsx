import InputBox from "../InputBox";
import Table from "../Table";
import {Data} from '../../../utils/types';
import { fetcher } from '../../../utils/axios';
import useSWR from 'swr';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const LoggedIn: React.FC = () => {

  const currentFitness = useSelector((state: RootState) => state.fitness.value);
  console.log(currentFitness)
  const {data: qty, error, isLoading } = useSWR<Data[]>(`/fitness/`, fetcher);

  if(error) return <Container><h3>Failed to load.</h3></Container>
  if(isLoading) return <Container><h3>Loading...</h3></Container>
  return (
    <Container>
      {/* <Table data={qty}/> */}
      <InputBox endpointProp={currentFitness}/>
    </Container>
  )
}

export default LoggedIn;
