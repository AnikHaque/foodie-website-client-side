import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, useWatch } from "react-hook-form";

import './MenuDetails.css'
import useAuth from '../../hooks/useAuth';
import Footer from '../footer/Footer';

const headingService={
   textAlign:'center',
   fontSize:'40px',
   fontWeight:'bolder'
}
const MenuDetails = () => {
   const {user} = useAuth();
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data =>{
       console.log(data);
       axios.post("https://radiant-reaches-24140.herokuapp.com/food",data)
       .then(res=>{
           if(res.data.insertedId){
               alert("Added Successfully");
               reset();
               
           }
       })
   } 
     const {id} = useParams();
    const [food,setFood] = useState({})
     useEffect(()=>{
         fetch(`https://radiant-reaches-24140.herokuapp.com/menu/${id}`)
       .then(res=>res.json())
        .then(data=>setFood(data))

     },[])
    return (
        <div className='mt-5'>
<Container>
  <Row>
    <Col className='shadow' sm={12} md={12} lg={6}><img src={food.img} className='img-fluid  p-5 rounded'></img></Col>
    <Col sm={12} md={12} lg={6}>
    <div class="container mt-5">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 bg-light pt-5 pb-5">
    <h1 className='fw-bold text-dark mx-5'>  {food.name}</h1>
        <br></br>
        <p className='text-dark mx-5'><b>Price:</b> {food.price}</p>
        <p className='text-dark mx-5'>{food.description}</p>      
    </div>
  </div>
</div>

     
        
    </Col>
  </Row>
</Container>

<form onSubmit={handleSubmit(onSubmit)} className="bg-dark text-center w-75 mx-auto pt-5 pb-5 px-5 pe-5 mb-5">
     <input {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='w-100 p-2' defaultValue={user.email} />
<br></br>
<br></br>
     <input {...register("name", { required: true, maxLength: 120 })} placeholder="name" className='w-100 p-2' defaultValue={user.displayName} />
     <br></br>
<br></br>
     <input {...register("foodname", { required: true, })} placeholder="Food Name" className='w-100 p-2' />

     <br></br>
<br></br>
     <input type="text" {...register("price")}placeholder="Food Price" className='w-100 p-2' />
     <br></br>
<br></br>
<input {...register("image", { required: true, maxLength: 920 })} placeholder="Food Image" className='w-100 p-2' />
<br></br>
<br></br>
     <input {...register("address", { required: true, })} placeholder="address" className='w-100 p-2'/>
     <br></br>
<br></br>
     <input type="submit" className='w-50' />
   </form> 
   
 </div>
    );

    }
export default MenuDetails;