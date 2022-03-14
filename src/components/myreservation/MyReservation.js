import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyReservation.css';
const MyReservation = () => {
    const [foods, setFoods] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://radiant-reaches-24140.herokuapp.com/reserve?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div>
            <h1 className="fw-bold  text-center mb-5">My Placed Reservation : {foods.length}</h1>
              <div className="service-container  pt-4 pb-4">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {foods.map((pd, index) => (

<div class="col">
<div class="card h-100 card-reserve text-white menu-details pt-3 pb-5">
      
      <div class="card-body">
          <img src={pd.img} className='img-fluid w-100 reserve-image'></img>
        {/* <h4 class="card-title text-center text-dark mt-5"><b className='text-car'>Reserved Car:</b><br></br>
        {user.displayName}</h4>
        <h4 class="card-title text-center  text-dark"><b className='text-car'>Reserved Car:</b>
        <br></br>{pd.name}</h4>
        <h5 className="text-center text-dark"><b className='text-car'>Car Price:</b> {pd.price} Taka</h5>
        <h5 className="text-center text-dark"><b className='text-car'>Reserve Date:</b> {pd.date} </h5>
        <h5 className="text-center text-dark"><b className='text-car'>Phone Number:</b> {pd.phone} </h5> */}
        <ol className='mt-5 mmm'>
          <li className='me-2 mb-2'><b className='text-warning me-3'>Reserved By:</b>{user.displayName}</li>
          <li className='me-2 mb-2'><b className='text-warning me-3'>Total Persons:</b>{pd.name}</li>
          <li className='me-2 mb-2'><b className='text-warning me-3'>Table Description:</b>{pd.description}</li>
          <li className='me-2 mb-2'><b className='text-warning me-3'>Reserve Date:</b>{pd.date}</li>
          <li className='me-5'><b className='text-warning me-3'>Phone No:</b>{pd.phone}</li>
        </ol>
      </div>
      
       
</div>
</div>
  ))}
                </div>
                </div>
             </div>
</div>
    );
};

export default MyReservation;