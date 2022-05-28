import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
 Accordion, 
 } from 'react-bootstrap';


function  AccordionDrop () {
    return (
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>#1 Eren Yeager</Accordion.Header>
          <Accordion.Body>
          The main hero (or antihero) of the series who, after witnessing his mother being devoured by a Titan while escaping his hometown as a young boy, dedicates his life to their eradication and joins the Survey Corps. After graduating fifth in his cadet class, he is swallowed by a bearded Titan during his first mission in Trost.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header> #2 Mikasa Ackerman</Accordion.Header>
          <Accordion.Body>
          Mikasa is Eren's childhood friend who was taken in by his family after seeing her parents brutally murdered by human traffickers. Though never officially adopted by the Jaeger family nor thinking of Eren's parents as her own, she felt a strong sense of gratitude toward them as caretakers, as well as Eren, who saved her life and gave her an iconic scarf. Her parents' tragic deaths had overwhelming influence on her, causing her to lose her innocence and realize the world's cruelty. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header> #3 Armin Arlert</Accordion.Header>
          <Accordion.Body>
          Armin is Eren and Mikasa's other childhood friend who joins them in order to help humanity and fulfill his dream of seeing the outside world. When Armin was young, his parents tried to venture beyond the Wall by creating a hot air balloon but were found out and killed by the First Interior Squad of the Military Police, leaving Armin to be raised by his grandfather. Armin's grandfather secretly possessed an illegal book containing information about the world beyond the Walls, which Armin later found and read. 
          </Accordion.Body>
        </Accordion.Item>
        
      </Accordion>
    );
  }


  export default  AccordionDrop ;
  