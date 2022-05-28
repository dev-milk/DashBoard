import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
   } from 'react-bootstrap';
  import {BrowserRouter, Route, Routes } from "react-router-dom";
  import Links from './Links';
  import Home from './Home';
  import Works from './Works';
  import About from './About';
  
 
  

function App() {
  return (
    <div >

<Container fluid>
<Row >
    <Col xs={12} className="mx-0">
    <div>
      <BrowserRouter>
        <Links /> 
         <Routes> 
        <Route exact path="/" element={<Home />} />
          <Route exact path="/Works" element={<Works />} />
          <Route exact path="/About" element={<About />} />
       </Routes> 
       </BrowserRouter>
      </div> 
      </Col>
  </Row>

</Container>

  </div>
  );
}

export default App;
