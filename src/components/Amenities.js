import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Amenities extends React.Component {
  state = {
    amenities: ["tv", "lake", "kayak", "beach"],
  }


  render() {
   return(
    <Container>
      <Row>
        <Col>
          <h2>
           Amenities
          </h2> 
        </Col>
      </Row>
      <Row>
        <Col>
        <ul>
       {this.state.amenities.map(x => {
         return(
           <li>
             {x}
           </li>
         )
       })}
     </ul>
        </Col>
      </Row>
    </Container>
   )
  }

}

export default Amenities;