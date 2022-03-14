import axios from 'axios';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

import './Reservation.css';
const Reservation = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://radiant-reaches-24140.herokuapp.com/reserve',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div>
          
            <Container>
            

  <Row>
  <h1 className='text-center fw-bold'>Reserve a Table</h1>
  <Col xs={12} sm={12} md={6} lg={6}>
  
    <Container>
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        <img src='https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' className='img-fluid w-100  image-reserve'></img>
    </Col>
  </Row>
</Container>
    </Col>

    <Col xs={12} sm={12} md={6} lg={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email",)} placeholder="Reserved By" defaultValue={user.displayName}/>
      <input {...register("name",)} placeholder="Tota Persons" />
      <input {...register("description",)} placeholder="Table Description"/>
      <input {...register("date",)} placeholder="Reserve Date"/>
      <input {...register("phone",)} placeholder="Phone Number"/>
      <input type="submit" className='fw-bold' />
    </form> 

    </Col>
    
  </Row>
</Container>
        </div>
    );
};

export default Reservation;