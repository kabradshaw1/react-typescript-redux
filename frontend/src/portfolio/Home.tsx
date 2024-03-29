import React, { useState } from 'react';
import { Container, Row, Button, Card, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home: React.FC = () => {
  const [featured] = useState([
    {
      name: 'Fitness Tracker',
      description: 'A health-oriented application aimed at helping users track their daily fitness activities such as heart rate, steps taken, active energy, and weight measurements. The app provides graphical data representation for easy tracking and analysis.',
      tech: 'Django, React, d3.js, TypeScript, Jest Testing',
      github: 'https://github.com/kabradshaw1/react-typescript-redux',
      deployed: 'fitness',
      image: 'fitness.png'
    },
    {
      name: 'Kyle\'s Store',
      description: 'A comprehensive mock e-commerce application that facilitates user authentication, shopping cart functionality, and order processing. The application also securely stores mock purchases in a database, exemplifying areal-world online retail scenario.',
      tech: 'React, TypeScript, PostgreSQL, Django, Axios, Django Restframework, React-Hook-Form, Yup',
      github: 'https://github.com/kabradshaw1/react-typescript-redux',
      deployed: 'store',
      image: 'django.PNG'
    },

  ]);
  return (
    <>
    <Container>
    <Row>
      <Col sm={12} md={6}>
        <Card>
          <Card.Img  src={`/images/portfolio/profile.JPG`}/>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header>Bio</Card.Header>
          <Card.Body>
            <Card.Text >
              Hello, my name is Kyle. I'm a full stack web developer. I'm currently seeking my first full time position
              as a web developer and continuing to teach myself TypeScript, Python and Docker.   I recently completed a six month coding
              bootcamp at UNC learning a variety of front
              and back end technologies.  I've worked as an engineer for power and communications for six years, working with
              electrical and structural engineering.  I have an ABET accredited BS in Engineering Technology from Western
              Carolina University.
            </Card.Text >
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
    <Container>
      <h2>Featured Projects</h2>
      <p>I have invested many hours into these projects, and I believe they do an excellent job of showcasing
        my experience with Django and React apps.  </p>
      <Row md={3} sm={1}>
          {featured.map((project)=> (
            <Col sm={12} md={6}>
              <Card key={project.name} className='m-1 bg-secondary'>
                <Card.Img className='mt-1' variant='top' src={`/images/portfolio/project/${project.image}`} />
                <Card.Body>
                  <Card.Title><h3>{project.name}</h3></Card.Title>
                  <div>
                    <Card.Subtitle>Discription</Card.Subtitle>
                    <p>{project.description}</p>
                    <Card.Subtitle>Technologies and Concepts</Card.Subtitle>
                    <p>{project.tech}</p>
                  </div>
                  <LinkContainer to={`/${project.deployed}/`}>
                    <Button className='me-1'>Deployed Site</Button>
                  </LinkContainer>
                  <Button href={project.github}>GitHub Repository</Button>
                </Card.Body>
              </Card>
            </Col>
          )
         )}
        <Col sm={12} md={6}>
          <Card className='m-1 bg-secondary'>
              <Card.Img className='mt-1' variant='top' src='/images/portfolio/project/tricypaa.png'/>
              <Card.Body>
                <Card.Title><h3>TRICYPAA.org</h3></Card.Title>
                <Card.Subtitle>Discription</Card.Subtitle>
                <Card.Text>A community-oriented web application serving as a digital platform for discussion and event updates for
                  TRICYPAA. The application offers an exclusive admin portal for managing upcoming events</Card.Text>
                <Card.Subtitle>Technologies and Concepts</Card.Subtitle>
                <Card.Text>GraphQL, MongoDB, Express, Apollo, NoSQL</Card.Text>
                <Button className='me-1' href='https://tricypaa.org'>Deployed Site</Button>
                <Button href='https://github.com/kabradshaw1/node'>GitHub Repository</Button>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Home;