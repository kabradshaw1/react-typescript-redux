import React, {useState} from 'react';
import { Container, Row, Button, Card, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PortfolioHeader from './Header';

const Home: React.FC = () => {
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
      description: 'This project displays fitness measurements such as daily max heart rate on a bar graph using the D3.js library.',
      tech: 'Django, React, d3.js, TypeScript, Jest Testing',
      github: 'https://github.com/kabradshaw1/react-typescript-redux',
      deployed: 'fitness',
      image: 'fitness.png'
    },
    {
      name: 'Kyle\'s Store',
      description: 'This application lays the ground work for a fully functional ecommerce site.  ',
      tech: 'React, TypeScript, PostgreSQL, Django, Axios, Django Restframework, React-Hook-Form, Yup',
      github: 'https://github.com/kabradshaw1/react-typescript-redux',
      deployed: 'store',
      image: 'django.PNG'
    },
  ]);
  return (
    <>
    <PortfolioHeader/>
    <Container>
      <Card id='about-me' className='bg-secondary'>
        <Row>
          <Col>
            <Card.Img  variant='top' src={`/images/portfolio/profile.JPG`}/>
          </Col>
          <Col>
            <Card.Text >
              Hello, my name is Kyle. I'm a full stack web developer. I'm currently seeking my first full time position
              as a web developer and continuing to teach myself TypeScript, Python and Docker.   I recently completed a six month coding
              bootcamp at UNC learning a variety of front
              and back end technologies.  I've worked as an engineer for power and communications for six years, working with
              electrical and structural engineering.  I have an ABET accredited BS in Engineering Technology from Western
              Carolina University.
            </Card.Text >
          </Col>
        </Row>
      </Card>
    </Container>
    <Container>
      <h2>Featured Projects</h2>
      <p>I have invested many hours into these projects, and I believe they do an excellent job of showcasing
        my experience with Django and React apps.  </p>
      <Row md={3} sm={1}>
          {featured.map((project)=> (
            <Card className='m-1 bg-secondary'>
              <Card.Img className='mt-1' variant='top' src={`/images/portfolio/project/${project.image}`} ></Card.Img>
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

export default Home;