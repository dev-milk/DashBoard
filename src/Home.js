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
 import TenoffImg from "./images/10off.png";
 import FifTenoffImg from "./images/15off.png";
 import TwenoffImg from "./images/20off.png";
 import QuartoffImg from "./images/25off.png";
 import Tenoff from './components/TenoffModal';
 import FifTenoff from './components/FifTenoffModal';
 import Twenoff from './components/TwenoffModal';
 import Quartoff from './components/QuartoffModal';

 

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
    
    <Button variant="dark" className="btn-sm rounded-pill w-90 mt-5">&gt;No Link</Button>
  
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
  Feedback &emsp;Your Tutor &emsp;2weeks ago
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
    <Container className="mx-4">
      <Row>
      <Col xs={12} sm={12} md={3} className="text-center py-3">
      <Image src={TenoffImg}  className="img-fluid" />
      <p>Until June30</p>
        <Tenoff /> 
        </Col>

        <Col xs={12} sm={12} md={3} className="text-center py-3">
      <Image src={FifTenoffImg}  className="img-fluid" />
      <p>Until June30</p>
        <FifTenoff />
        </Col>

        <Col xs={12} sm={12} md={3} className="text-center py-3">
      <Image src={TwenoffImg}  className="img-fluid" />
      <p>Until June30</p>
       <Twenoff />
        </Col>

        <Col xs={12} sm={12} md={3} className="text-center py-3">
      <Image src={QuartoffImg}  className="img-fluid" />
      <p>Until June30</p>
       <Quartoff />
        </Col>
      </Row>
    </Container>
  </Card.Body>
    </Card>

    </Col>
  </Row>
  

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
