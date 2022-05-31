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
   } from 'react-bootstrap';
 import {LinkContainer} from "react-router-bootstrap";
 import MailImg from "./images/mail.png"; // mail.png
 
 

function Home() {
  return (
    <div >
<Container id="top">
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
    Dapibus ac facilisis in
    </ListGroup.Item>
  <ListGroup.Item className="mail-list">
  <span className="mail-sender03"></span>
    Morbi leo risus
    </ListGroup.Item>
</ListGroup>
    </div>

    <div className="flex-fill align-self-md-end  text-center pb-1">
    <LinkContainer to="/Transaction">
    <Button variant="dark" className="btn-sm rounded-pill w-90 mt-5">&gt;More</Button>
    </LinkContainer>
    </div>

    </div>
      
  </Card.Body>
</Card>
    </Col>
  </Row> 
  {/* Coupon */}

</Container>
<Row  className="g-5 mb-3">
    <Col > 
    ここにクーポンコンテンツが入る。
    </Col>
  </Row>
  {/* Modal */}

  {/* Transaction / Schedule*/}
  <Row  className="g-5 mb-3">
    <Col > 
    ここに取引とスケジュールのコンテンツが入る。
    </Col>
  </Row>
    
  </div>
  );
}

export default Home;
