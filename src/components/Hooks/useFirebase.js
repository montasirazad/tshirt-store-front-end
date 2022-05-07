import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/initializeAuthentication";

initializeAuthentication()
const useFirebase = () => {
    const [signedInUser, setSignedInUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    
    const provider = new GoogleAuthProvider();
    const handelGoogleSignIn = () => {


       
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const { email, displayName, photoURL } = user;
                const newUser = {
                    name: displayName,
                    email: email,
                    image: photoURL
                }
                setSignedInUser(newUser)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                const newError = {
                    errCode: errorCode,
                    errEmail: email,
                    errorMessage: errorMessage
                };
                setError(newError)
            });

    }

    const handelGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setSignedInUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
         
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setSignedInUser(user);
            } else {
                setSignedInUser({})
            }
        });
        return () => unSubscribe
    }, []);


    return {
        handelGoogleSignIn,
        handelGoogleSignOut,
        signedInUser,
        error
    }
}

export default useFirebase;