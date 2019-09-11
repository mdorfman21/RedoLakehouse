import React from 'react';
import Images from './ImageGallery';
import { Container, Row, Col } from 'react-bootstrap';
import Button from './button';
import Header from './Header';

class AppContainer extends React.Component {

  goToAirBnB = () => {
    window.open('https://www.airbnb.com/').focus();
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Images />
            <Button onClick={this.goToAirBnB} name="Book on AirBnB" />
          </Col>
        </Row>   
      </Container>
    )
  }

}

export default AppContainer