import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
  Breadcrumb,
  Card,
  Button,
  Image,
  ListGroup,
  Stack,
   } from 'react-bootstrap';
 import {LinkContainer} from "react-router-bootstrap";
 import MailImg from "./images/mail.png"; // mail.png
 
 

function Home() {
  return (
    <div  id="top">
<Container >
  {/* パンくず */}
<Breadcrumb>
<LinkContainer to="/">
   <Breadcrumb.Item >Home</Breadcrumb.Item>
</LinkContainer>
</Breadcrumb>

 {/* Notification */}
<Row  className="g-5 mb-3">
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center title-section">Notification</Card.Title>

    <div className="d-md-flex justify-content-between">

    <div className="flex-fill align-self-center">
    <Image src={MailImg}  className="d-block mx-auto img-fluid" />
    </div>

    <div className="flex-fill">
    <ListGroup variant="flush">
  <ListGroup.Item className="mail-list">
    <span className="mail-sender01"></span>
    Support Server&emsp; Maintenance&emsp;7days ago
    </ListGroup.Item>
  <ListGroup.Item className="mail-list">
  <span className="mail-sender02"></span>
  Campain&emsp;10%OFF Monday Only &emsp;1 week ago
    </ListGroup.Item>
  <ListGroup.Item className="mail-list">
  <span className="mail-sender03"></span>
  Feedback &emsp;Your Yutor &emsp;2weeks ago
    </ListGroup.Item>
</ListGroup>
    </div>

    <div className="flex-fill align-self-md-end  text-center pb-1">
    <LinkContainer to="/Notification">
    <Button variant="dark" className="btn-sm rounded-pill w-90 mt-5">&gt;More</Button>
    </LinkContainer>
    </div>

    </div>
  </Card.Body>
</Card>
    </Col>
  </Row> 
 
  {/* Coupon */}
<Row  className="g-5 mb-3">
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center title-section">Coupon</Card.Title>
  </Card.Body>
    </Card>

    </Col>
  </Row>

  {/* Transaction / Schedule*/}
  <Row  className="g-5 mb-3">
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center title-section">Transaction</Card.Title>
  </Card.Body>
  </Card>
    </Col>
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center title-section">Schedule</Card.Title>
  </Card.Body>
  </Card>
    </Col>
  </Row>

   {/* Modal */}

</Container >

<Stack direction="horizontal"  className="mt-5 p-3">
  <span className="text-muted">© devmilk.biz</span>
</Stack>
<div className="float-end mb-1">
  <a href="#top" className="gotop"></a>
</div>
  </div>

  );
}

export default Home;
