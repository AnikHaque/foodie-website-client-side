import { useEffect, useState } from "react"
import initializAuthentication from "../components/login/firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";

initializAuthentication();

const useFirebase = () => {
    const [error,setError]=useState({})
    const [user,setUser] = useState({});
    const [admin,setAdmin] = useState(false);
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();


// google sign in implement
const signInUsingGoogle = () => {
    
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      saveUser(user.email,user.displayName,'PUT')
      setError('');
      
    }).catch((error) => {
     
      setError(error.message);
      
    })
    
  }



// sign out implement 
const logout = () => {
    signOut(auth)
    .then(()=>{
        setUser({});
    })
}

// observer 
useEffect(()=>{
    onAuthStateChanged(auth, user =>{
        if(user){
            console.log( user);
            setUser(user);
        }
    })
},[]) 

useEffect(()=>{
    fetch(`https://radiant-reaches-24140.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
    },[user.email])
    
    const logOut = () => {
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          })     
    }

// save user 
const saveUser = (email, displayName,method) => {
const user = {email,displayName};
fetch('https://radiant-reaches-24140.herokuapp.com/users',{
    method:method,
    headers: {
        'content-type' :'application/json'

    },
    body:JSON.stringify(user)
})
.then()
}



return {
    user,
    admin,
    error,
    signInUsingGoogle,
    logout

}

}
export default useFirebase;
