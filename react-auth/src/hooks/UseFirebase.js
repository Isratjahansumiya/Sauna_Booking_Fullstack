import { useState } from "react"
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect } from "react";


initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]= useState({});
    const [error,setError]=useState('');
    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();
    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message);
        })

    }
    const signInUsingGithub = ()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            setUser(result.user)
            console.log(result.user)
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
       signInUsingGithub,
       logout
   }


}
export default useFirebase;