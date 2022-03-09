import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {
const {user,signInUsingGoogle} = useAuth();
  return (
    <div id="login">
      <div>
                <h1>Please Register</h1>
            </div>
            <form >
<input type="email" name='email' placeholder='Enter your email' className='w-25'></input>
<br></br>
<br></br>
<input type="password" name='password' placeholder='Enter your Password' className='w-25'></input>
<br></br>
<br></br>
<input type="submit" value="Submit"></input>
            </form>
            <p>Already Registerd? <Link to="/login">Please Login</Link></p>
            <br></br>
            
            <div>
              <button onClick={signInUsingGoogle} className='btn btn-dark text-white buttonn'><i class="fa-brands fa-google fs-3"></i></button>
              
            </div>
    </div>
  );
};

export default Register;