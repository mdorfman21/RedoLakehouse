import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import './gallery.css'
import { Container, Row, Col} from 'react-bootstrap';

class SimpleSlider extends React.Component {

  state = {
    nav1: null,
    nav2: null
  }
  
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1=slider)}>
      
      <div>
        <h3 className="image">1</h3>
        <img className="margin" src="https://image.shutterstock.com/image-photo/sunny-winter-afternoon-venue-on-600w-1431131984.jpg" alt="stock" />
      </div>
      <div>
        <h3 className="image">2</h3>
        <img className="margin" src="https://image.shutterstock.com/image-photo/sunset-lake-house-panorama-reflection-600w-1261048015.jpg" alt="lake" />
      </div>
      <div>
        <h3 className="image">3</h3>
        <img className="margin" src="https://image.shutterstock.com/image-photo/chicoutimi-river-saguenay-quebec-canada-600w-733288543.jpg" alt="trees" />
      </div>
      <div>
        <h3 className="image">4</h3>
        <img className="margin" src="https://image.shutterstock.com/image-photo/lake-daylesford-lakehouse-260nw-1373796512.jpg" alt="boat" />
      </div>
      <div>
        <h3 className="image">5</h3>
        <img className="margin" src="https://image.shutterstock.com/image-photo/chicoutimi-river-saguenay-quebec-canada-600w-687588589.jpg" alt="another lake" />
      </div>
      <div>
        <h3 className="image">6</h3>
        <img className="margin" src="https://image.shutterstock.com/image-photo/early-morning-lakehouse-adirondacks-600w-1350384188.jpg" alt="another one lake" />
      </div>
    </Slider>
      <Slider asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} slidesToShow={6} swipeToSlide={true}
          focusOnSelect={true}>
      <div>
        <h3 className="image">1</h3>
        <img className="margin thumbnail" src={"https://image.shutterstock.com/image-photo/sunny-winter-afternoon-venue-on-600w-1431131984.jpg"} alt="stock" />
      </div>
      <div>
        <h3 className="image">2</h3>
        <img className="margin thumbnail" src="https://image.shutterstock.com/image-photo/sunset-lake-house-panorama-reflection-600w-1261048015.jpg" alt="lake" />
      </div>
      <div>
        <h3 className="image">3</h3>
        <img className="margin thumbnail" src="https://image.shutterstock.com/image-photo/chicoutimi-river-saguenay-quebec-canada-600w-733288543.jpg" alt="trees" />
      </div>
      <div>
        <h3 className="image">4</h3>
        <img className="margin thumbnail" src="https://image.shutterstock.com/image-photo/lake-daylesford-lakehouse-260nw-1373796512.jpg" alt="boat" />
      </div>
      <div>
        <h3 className="image">5</h3>
        <img className="margin thumbnail" src="https://image.shutterstock.com/image-photo/chicoutimi-river-saguenay-quebec-canada-600w-687588589.jpg" alt="another lake" />
      </div>
      <div>
        <h3 className="image">6</h3>
        <img className="margin thumbnail" src="https://image.shutterstock.com/image-photo/early-morning-lakehouse-adirondacks-600w-1350384188.jpg" alt="another one lake" />
      </div>
      </Slider>
        
      </div>
      
    );
  }
}
export default SimpleSlider