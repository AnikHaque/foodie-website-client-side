import React from 'react';
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import image6 from '../../images/6.jpg'
import image7 from '../../images/7.jpg'
import image8 from '../../images/8.jpg'
import image9 from '../../images/delicious_1.jpg'
import image10 from '../../images/delicious_2.jpg'
import image11 from '../../images/delicious_3.jpg'
import image12 from '../../images/delicious_4.jpg'
import './Gallary.css';
const Gallary = () => {
    return (
        <div className='mb-5'>
            <h1 className='fw-bold text-center mb-5 mt-5'>Our Gallary</h1>
           <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image1} className='img-fluid mb-4 gallary-image'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image2} className='img-fluid mb-4 gallary-image'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image3} className='img-fluid gallary-image'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image4} className='img-fluid gallary-image mb-4'></img>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image5} className='img-fluid gallary-image mb-4'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image6} className='img-fluid gallary-image mb-4'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image7} className='img-fluid gallary-image mb-4'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image8} className='img-fluid mb-4 gallary-image'></img>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image9} className='img-fluid mb-4 gallary-image'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image10} className='img-fluid mb-4 gallary-image'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image11} className='img-fluid mb-4 gallary-image'></img>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-3">
    <img src={image12} className='img-fluid mb-4 gallary-image'></img>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Gallary;