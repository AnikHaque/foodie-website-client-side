import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './About.css'
const About = () => {
    
    const {user,signInUsingGoogle} = useAuth();
    return (
        <div id="login">
            <div>
                <h1>Please Login</h1>
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
            <p>New to Foodie? <Link to="/register">Create acount</Link></p>
            <br></br>
            <div>
              <button onClick={signInUsingGoogle} className='btn btn-dark text-white buttonn'><i class="fa-brands fa-google fs-3"></i></button>
              
            </div>
            <div>
              
            </div>
        </div>
    );
};

export default About;