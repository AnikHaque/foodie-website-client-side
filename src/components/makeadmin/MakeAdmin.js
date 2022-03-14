import React, {useState} from 'react';
import './MakeAdmin.css'
const MakeAdmin = () => {
  const [email,setEmail] = useState('');
  const handleOnBlur = e => {
    setEmail(e.target.value);
  }

  const handleAdminSubmit = e => {
      const user = {email};
      fetch('https://radiant-reaches-24140.herokuapp.com/users/admin',{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(user)
          })
.then(res=>res.json())
.then(data=>{
if(data.modifiedCount){
  setEmail('');
  console.log(data);
}
 
})

      e.preventDefault()
  }
    return (
        <div>
            <h1 className='text-center fw-bold'>Make Admin</h1>
           
<form onSubmit={handleAdminSubmit}>
    <input type="email" placeholder="enter email" onBlur={handleOnBlur} name="email" className='w-25'></input>
    <br></br>
    <br></br>
    <button className='btn btn-dark text-white mx-2'>Make Admin</button>
</form>
        </div>
    );
};

export default MakeAdmin;