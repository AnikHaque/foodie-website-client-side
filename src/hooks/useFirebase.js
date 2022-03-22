import { useEffect, useState } from "react"
import initializAuthentication from "../components/login/firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializAuthentication();

const useFirebase = () => {
    const [error,setError]=useState({})
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin,setAdmin] = useState(false);
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();


// login implement 
const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
}

const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
}

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
    isLoading,
    authError,
    registerUser,
    loginUser,
    admin,
    error,
    signInUsingGoogle,
    logout

}

}
export default useFirebase;
