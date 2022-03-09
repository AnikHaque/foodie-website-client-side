import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Details.css';
const Details = () => {
    return (
        <div className='mt-5'>
            <Container className='mb-5'>
  <Row>
    <Col xs={12} sm={12} md={5} lg={5}>
    <h1 className='fw-bold mx-5'>Welcome to</h1>
    <h2 className='fw-bold  mx-2 fs-1'>Online Restaurant</h2>
    <br></br>
    <p className='text-secondary'>Enjoy sweeping water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas.</p>
    <br></br>
    <Button variant="dark" className='Details-button text-white'>Read More</Button>

    </Col>
    <Col xs={12} sm={12} md={7} lg={7}>
    <Container>
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        <img src='https://expert-themes.com/html/shangrila/images/resource/welcome_1.jpg' className='img-fluid Detailsimage1'></img>
    </Col>
  </Row>
</Container>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Details;