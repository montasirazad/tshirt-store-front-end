import React from 'react';
import useAuth from '../Hooks/useAuth';
import './LogIn.css';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const { handelGoogleSignIn,
        handelGoogleSignOut,
        signedInUser,
        error } = useAuth();

    console.log(signedInUser);
    return (
        <div className='login-div'>


            {signedInUser.email ? <button className="btn btn-outline-success" onClick={handelGoogleSignOut}>Log out</button>
                : <button className="btn btn-outline-success" onClick={handelGoogleSignIn}>< GoogleIcon />Continue with google</button>}

            {
                error.errorMessage &&
                <p className='text-danger'>{error.errorMessage}</p>
            }

        </div>
    );
};

export default Login;