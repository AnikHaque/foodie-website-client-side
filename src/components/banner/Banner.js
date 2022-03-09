import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100"
      src="https://betalist.imgix.net/attachment/89310/image/744a960ae50f2880876db4d89df35a34.jpg?ixlib=rb-4.0.0&h=300&fit=clip&auto=format&dpr=2&s=411f2c6b43bc06209a21a56953b65637"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Taste Your Best Food</h3>
      <p>Stay Happy, Stay Healthy</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100"
      src="https://betalist.imgix.net/attachment/89310/image/744a960ae50f2880876db4d89df35a34.jpg?ixlib=rb-4.0.0&h=300&fit=clip&auto=format&dpr=2&s=411f2c6b43bc06209a21a56953b65637"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>We are Here For Your Taste</h3>
      <p>Stay Happy, Stay Healthy</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;