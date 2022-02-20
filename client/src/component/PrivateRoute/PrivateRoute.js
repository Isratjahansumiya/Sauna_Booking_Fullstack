import * as React from 'react';
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PrivateRoute() {
    const {user}=useAuth();
    let location=useLocation();

    return (
            user.email?<Outlet/>
            :<Navigate
            to= "/login" state={{from: location}} replace/>
    );
};

export default PrivateRoute;