import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children,...rest }) => {
    const { signedInUser } = useAuth();
    const location = useLocation();

    if (signedInUser.email) {
        return children;
    }
  
     return <Navigate to='/login' state={{from:location}} replace/>

}

export default PrivateRoute;