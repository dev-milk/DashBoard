import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  Button, 
  Modal,
 } from 'react-bootstrap';


export function Twenoff() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" className="btn-sm rounded-pill w-90 mb-2" onClick={handleShow}>
          Menu
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>20% Coupons</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you've got generaous Happy Coupons this time!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Twenoff;