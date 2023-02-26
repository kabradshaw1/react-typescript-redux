import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

interface IProps {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
};

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
      return people.map((person) => {
        return (
          <Card>
            <Card.Img src={person.url}/>
            <Card.Body>
              <Card.Title>{person.name}</Card.Title>
              <Card.Text>{person.age}</Card.Text>
              <Card.Text>{person.note}</Card.Text>
            </Card.Body>
          </Card>
        );
      });
  };

  return (
    <Container>
      {renderList()}
    </Container>
  )
};

export default List;