import React, {useState} from 'react';
import { Container, Row, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const PortfolioProjects: React.FC = () => {
  const [featured] = useState([
    // {
    //   name: 'National Parks Search Engine',
    //   description: 'This project serves to provide access to the APIs provided by nps.gov.  There is still a little work I would like to do for this project.',
    //   tech: 'MERN, NoSQL, GraphQL, API, React, MangoDB, Express.js',
    //   gitub: 'https://github.com/kabradshaw1/National-Parks',
    //   deployed: 'https://evening-reaches-42082.herokuapp.com/',
    //   screenshot: 'National-Parks'
    // },
    {
      name: 'Fitness Tracker',
      description: 'This project displays fitness measurements such as daily max heart rate on a bar graph.  It has an Express.js server that allows you to store the data in a MySQL database.  It also demonstrates MVC and ORM.',
      tech: 'ORM, MySQL, SQL, MVC, Restful API, Express.js',
      github: 'https://github.com/kabradshaw1/Fitness-Tracker',
      deployed: 'https://secure-gorge-89550.herokuapp.com/',
      screenshot: 'Fitness'
    },
    {
      name: 'Kyle\'s Store',
      description: 'This app will allow creating users, posting, and responding to posts.  I\'m still very actively working on this',
      tech: 'React, TypeScript, PostgreSQL, Django, Axios, Django Restframework, React-Hook-Form, Yup',
      github: 'https://github.com/kabradshaw1/React-Django-REST-PostgreSQL',
      deployed: 'https://serene-tor-73175.herokuapp.com/',
      screenshot: 'django'
    },
  ]);
  return (
    <>

    <Container fluid>
      <h2>Featured Projects</h2>
      <p>These first two projects are from UNC Coding Bootcamp.  The Django project I’ve done completely independently.  </p>
      <Row md={3} sm={1}>
          {featured.map((project)=> (
            <Card className='m-1 bg-secondary'>
              <Card.Img className='mt-1' variant='top' src={require('../../assets/img/screen_shots/' + project.screenshot + '.PNG')} ></Card.Img>
              <Card.Body>
                <Card.Title><h3>{project.name}</h3></Card.Title>
                <Card.Text>
                  <Card.Subtitle>Discription</Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Subtitle>Technologies and Concepts</Card.Subtitle>
                  <Card.Text>{project.tech}</Card.Text>
                </Card.Text>
                <LinkContainer to={`/${project.deployed}/`}>
                  <Button variant='primary' className='me-1'>Deployed Site</Button>
                </LinkContainer>
                <Button variant='primary' href={project.github}>GitHub Repository</Button>
              </Card.Body>
            </Card>
          )
         )}
      </Row>
    </Container>
    </>
  )
}

export default PortfolioProjects;