import useSWR from 'swr';
import { fetcher } from '../../../utils/axios';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Items } from '../../../utils/types';

const Detail: React.FC = () => {
  const { id } = useParams();
  const { data: item, error, isLoading } = useSWR<Items>(`/store/item/${id}/`, fetcher)

  if(error) return <Container><h3>Failed to load</h3></Container>
  if(isLoading) return <Container><h3>Loading...</h3></Container>

  return (
    <Container>
      {item ? (
        <>
          <Link to="/store/">← Back to Products</Link>
          <h2>{item.name}</h2>
          <p>This page has loaded properly, but is still under construction.</p>
        </>
      ): null}
    </Container>
  )
}

export default Detail;