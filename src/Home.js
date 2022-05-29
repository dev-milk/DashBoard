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
   } from 'react-bootstrap';
 import {LinkContainer} from "react-router-bootstrap";
 
 

function Home() {
  return (
    <div >
<Container >
  {/* パンくず */}
<Breadcrumb>
<LinkContainer to="/">
   <Breadcrumb.Item >Home</Breadcrumb.Item>
</LinkContainer>
</Breadcrumb>

<Row  className="g-5 mb-3">
    <Col > 
    <Card className="rounded-0 grid-border">
  <Card.Body>
    <Card.Title className="text-center title-section">Notification</Card.Title>
    {<div className="d-md-flex justify-content-between">
    <Card.Img variant="top" src="/images/mail.png" />
      ここにdiv入ります。</div>}
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
  </Row> 

</Container>
    
  </div>
  );
}

export default Home;
