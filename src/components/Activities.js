import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Activities() {

  return(
    <Container>
      <Row>
        <Col>
        <h2>
          Activities
        </h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <ul>
          <li>
            <a href="https://www.nps.gov/dewa/index.htm" target="_blank">Delaware Water Gap</a>
          </li>
          <li>
            <a href="https://hotdogjohnny.com/store/" target="_blank">Hot Dog Johnny's</a>
          </li>
        </ul>
        </Col>
      </Row>
    </Container>   
  )
}

export default Activities;