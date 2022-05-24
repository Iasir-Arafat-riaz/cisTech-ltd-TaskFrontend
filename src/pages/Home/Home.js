import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/25c4C4G/wp6819191-mechatronics-wallpapers.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/JRXdm4h/wp6794426-developers-wallpapers.jpg"
      alt="second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/ch00HJd/wp2700080-computer-science-engineering-wallpapers.jpg"
      alt="second slide"
    />
   
  </Carousel.Item>
  
  
</Carousel>
        </div>
    );
};

export default Home;