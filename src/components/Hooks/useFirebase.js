import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [signedInUser, setSignedInUser] = useState({});

    initializeApp()
    const provider = new GoogleAuthProvider();
    const handelGoogleSignIn = () => {


        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setSignedInUser(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

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
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);


    return {
        handelGoogleSignIn,
        handelGoogleSignOut,
        signedInUser
    }
}

export default useFirebase;