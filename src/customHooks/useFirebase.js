import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.init";

  firebaseInitialize();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [language, setLanguage] = useState("English");
    const googleSignIn = (navigate, location) => {
      // setIsLoading(true);
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          const user =result.user
          navigate(location?.state?.from || "/addInfo");
          setError("");
  
          // history.push(location?.state?.from || "/dashboard")
        })
        .catch((error) => {
          // const errorMessage = error.message;
          setError(error.message);
        });
      // .finally(() => setIsLoading(false));
    };
  
    //Sign in with username and password
    const signInUser=(email, password,navigate,location)=>{
      signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in 
      setUser(result.user) ;
      setError("")
      const destination = location?.state?.from || "/addInfo"
      navigate(destination)
      // ...
    })
    .catch((error) => {
     
      setError(error.message)
    });
  
    }
  
    //user registration by email and password
    const userRegistration = (
      email,
      password,
      displayName,
      navigate,
      location
    ) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in
          // const user = result.user;
          const newUser = { email, displayName };
          setUser(newUser);
          updateProfile(auth.currentUser, {
            displayName,
            email,
          })
            .then(() => {
              // Profile updated!
              setSuccess("Your Profile Create Successfully")
              setError("")
              const destination =location?.state?.from ||"/home"
              navigate(destination)
              // ...
            })
            .catch((error) => {
              // An error occurred
              setError(error.message)
              // ...
            });
        })
        .catch((error) => {
          setSuccess("")
          setError(error.message);
          // ..
        });
    };
  
    //Observer
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setIsLoading(true);
        if (user) {
          setUser(user);
          // ...
        } else {
          // User is signed out
          setUser({});
        }
        setIsLoading(false);
      });
    }, [auth]);
  
    //user Logout
    const userLogout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          setUser({});
        })
        .catch((error) => {
          // An error happened.
        });
    };
  
  
  
    
  
    return {
      googleSignIn,
      user,
      userLogout,
      language,
      setLanguage,
      isLoading,
      error,
      success,
      userRegistration,
      signInUser
    };
  };
  export default useFirebase;
  