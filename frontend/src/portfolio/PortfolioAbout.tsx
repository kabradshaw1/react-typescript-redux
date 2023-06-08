import React from "react";
import profileImage from "../../assets/img/profile/profile.jpg";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PortfolioAbout: React.FC = () =>{
  return (
    <Container>
      <Card id='about-me'>
        <Row>
          <Col>
            <Card.Img  variant='top' src={profileImage}/>
          </Col>
          <Col>
            <Card.Text >
              Hello, my name is Kyle. I'm a full stack web developer. I'm currently seeking my first full time position
              as a web developer and continuing to teach myself TypeScript and Python.   I recently completed a six month coding
              bootcamp at UNC learning a variety of front
              and back end technologies.  I've also worked as an engineer for power and communications, working with
              electrical and structural engineering.  I also have an ABET accredited BS in Engineering Technology from Western
              Carolina University.
            </Card.Text >
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default PortfolioAbout