import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './IndividualMenu.css';
const IndividualMenu = (props) => {
    const {_id,name,description,img,price} = props.foods;
    return (
        <div>
           <div class="col">
    <div class="card h-100 w-100 card-bg p-2">
      <img src={img} class="card-img-top img-fluid w-100" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center fw-bolder">{name}</h5>
        <p>{description}</p>
        <h4 class="card-text fw-bold">$ {price}</h4>
      </div>
      <Link to={`/menudetails/${_id}`}>
        <button className="btn btn-dark text-white mx-5 px-5 pe-5 mb-3 mt-3">Order</button>
        </Link>
     
  </div>
</div>
        </div>
    );
};

export default IndividualMenu;