import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
   } from 'react-bootstrap';
 
 

function Home() {
  return (
    <div >
      
<Container >
<Row  className="justify-content-md-center m-5">
    <Col > 
     {<p>これはHomeの内容です。</p>}
    </Col>
  </Row> 

</Container>
    
  </div>
  );
}

export default Home;
