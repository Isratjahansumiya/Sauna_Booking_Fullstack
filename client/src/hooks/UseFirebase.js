import { useState } from "react"
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect } from "react";


initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]= useState({});
    const [error,setError]=useState('');
    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message);
        })

    }

    const logout=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
                user.getIdToken()
                .then((idToken)=>{
                    sessionStorage.setItem('token',idToken);
                })
            }
        })
    },[auth])
    return{
        user,
        error,
        signInUsingGoogle,
        logout
    }

}
export default useFirebase;