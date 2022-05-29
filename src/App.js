import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
   } from 'react-bootstrap';
  import {BrowserRouter, Route, Routes } from "react-router-dom";
  import GlobalNav from './components/GlobalNav';
  import Home from './Home';
  import Transaction from './Transaction';
  import Notification from './Notification';
  import Schedule from './Schedule';
  
 

function App() {
 
  
  return (
    <div >

<Container>
<Row >
    <Col xs={12} className="mx-0">
    <div>
      <BrowserRouter>
        <GlobalNav />       
         <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Notification" element={<Notification />} />
        <Route exact path="/Transaction" element={<Transaction />} />
        <Route exact path="/Schedule" element={<Schedule />} />
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
