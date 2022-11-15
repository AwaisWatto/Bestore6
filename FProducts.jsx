import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import logo from './bethemestore-product-pic6.webp'
import {FaStar } from 'react-icons/fa';

function Fproducts() {
    return (

      <Container className="p-3"  >
          
        <Row>
        <Col>
        <div className=" p-5 display-4 text-center ">Featured Products </div>
        </Col>
        </Row>

        <Row>
        <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>


      <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      
        </Row>

        <Row className=" mb-4 mb-md-4" >
        <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>


      <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      
        </Row>

    </Container>
);
}

export default Fproducts;