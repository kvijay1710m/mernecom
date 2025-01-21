import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticated, user, children }) => {
    const location = useLocation();//-->tells the curent location you are at.
    // 1st: Not authenticated, trying to access any route other than login or register
    if (
        !isAuthenticated &&
        !location.pathname.includes('/login') &&
        !location.pathname.includes('/register')
    ) {
        return <Navigate to="/auth/login" />;
    }
    // 2nd: Logged in and trying to access login or register
    if (
        isAuthenticated &&
        (location.pathname.includes("/login") || location.pathname.includes("/register"))
    ) {
        if (user?.role === 'admin') {
            return <Navigate to="/admin/dashboard" />;
        } else {
            return <Navigate to="/shop/home" />;
        }
    }
    // 3rd: Logged in as a normal user, trying to access an admin page
    if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
        return <Navigate to="/unauth-page" />;
    }
    //4th : Logged in as Admin, trying to shop
    if (isAuthenticated && user?.role == 'admin' && location.pathname.includes('shop')) {
        return <Navigate to="/admin/dashboard" />
    }

    return <>{children}</>;
};

export default CheckAuth;
