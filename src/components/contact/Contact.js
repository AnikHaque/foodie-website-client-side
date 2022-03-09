import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <h1 className='text-center fw-bold mt-5 mb-5'>Connect with me!</h1>
            <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
      <img src='https://ak.picdn.net/shutterstock/videos/28010530/thumb/11.jpg' className='img-fluid contact-image'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
      <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Present Adress</h5>
        <p class="card-text">House 31, Road 8/A, Dhanmondi, Dhaka Bangladesh</p>
      </div>
    </div>
  </div>
      <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Office Address</h5>
        <p class="card-text">60 Feet, monipur school, Mirpur 2, Dhaka Bangladesh</p>
      </div>
    </div>
  </div>
      <div class="col">
   <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Connect Me</h5>
        <p class="card-text">Phone: 01814803281</p>
        
        <p class="card-text">Email: anik.haque.cse1@gmail.com</p>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default Contact;