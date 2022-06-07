import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
  Breadcrumb,
  Card,
  Stack,
   } from 'react-bootstrap';
 import {LinkContainer} from "react-router-bootstrap";

 
 

function Notification() {
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
    <Card.Title className="text-center title-section">Notificationの内容</Card.Title>


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

export default Notification;
