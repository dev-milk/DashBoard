import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
  Breadcrumb,
   } from 'react-bootstrap';
 import {LinkContainer} from "react-router-bootstrap";
 
 

function Home() {
  return (
    <div >
<Container >
<Breadcrumb>
<LinkContainer to="/">
   <Breadcrumb.Item >Home</Breadcrumb.Item>
</LinkContainer>
</Breadcrumb>
<Row  className="justify-content-md-center m-5">
  
    <Col > 
    
     {<p>これはDashboadの内容です。</p>}
    </Col>
  </Row> 

</Container>
    
  </div>
  );
}

export default Home;
