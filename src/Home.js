import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
  NavbarBrand,
  Breadcrumb,
  Card,
  Button,
  Image,
  ListGroup,
  Stack,
   } from 'react-bootstrap';
 import {LinkContainer} from "react-router-bootstrap";
 import MailImg from "./images/mail.png"; 
 

function Home() {
  return (
    <div  id="top">
  {/* DashBoad  Home*/}
<Container >
   {/*ヘッダー */}
  <div className="d-flex flex-wrap align-items-center  justify-content-between py-3 mb-2 border-bottom">
  <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0">
    <LinkContainer to="/">
    <NavbarBrand>
    <span className="logo-font text-dark text-decoration-none">Bootstrap Only</span>
    </NavbarBrand>
   </LinkContainer>
     </div>
   <div className="float-sm-end">
   <Button variant="dark" className="btn-sm rounded w-90">Menu</Button>
   </div>
  </div>

  {/* パンくず */}
<Breadcrumb>
<LinkContainer to="/">
   <Breadcrumb.Item >Home</Breadcrumb.Item>
</LinkContainer>
</Breadcrumb>

 {/* Transaction / Schedule*/}
 <Row  className="g-5 mb-3">
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center section-font">Transaction</Card.Title>
    <div className="flex-fill align-self-md-end  text-center pb-1">
    <LinkContainer to="/Transaction">
    <Button variant="dark" className="btn-sm rounded-pill w-90 mt-5">&gt;More</Button>
    </LinkContainer>
    </div>
  
  </Card.Body>
  </Card>
    </Col>
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center section-font">Schedule</Card.Title>
    <div className="flex-fill align-self-md-end  text-center pb-1">
    <LinkContainer to="/Schedule"> 
    <Button variant="dark" className="btn-sm rounded-pill w-90 mt-5">&gt;More</Button>
    </LinkContainer>
    </div>

  </Card.Body>
  </Card>
    </Col>
  </Row>

 {/* Notification */}
<Row  className="g-5 mb-3">
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center section-font">Notification</Card.Title>

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
    <Card.Title className="text-center section-font">Coupon</Card.Title>
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
