import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
  NavbarBrand,
  Button,
  Breadcrumb,
  Image,
  Card,
  Stack,
   } from 'react-bootstrap';
 import {LinkContainer} from "react-router-bootstrap";
 import MailImg from "./images/mail.png"; 

 
 

function Schedule() {
  return (
    <div  id="top">
 {/* DashBoad  Schedule*/}
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
<Breadcrumb.Item active>Notification</Breadcrumb.Item>
</Breadcrumb>

 {/* Contents */}
<Row  className="g-5 mb-3">
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center section-font">Notification</Card.Title> 
    <h1 className="title-font text-center my-3 align-self-center">Coming Soon</h1>
    <div className="flex-fill align-self-center my-4">
    <Image src={MailImg}  className="d-block mx-auto img-fluid" />
    </div>
    
     
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

export default Schedule;
