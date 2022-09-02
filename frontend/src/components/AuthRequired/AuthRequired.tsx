import React from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {useAppSelector} from "../../redux/store";
import Preloader from "../Preloader/Preloader";


const AuthRequired: React.FC = () => {
    const {loggedIn, status} = useAppSelector((state) => state.authSlice)

    if (status === "idle" || status === "pending") {
        return <Preloader />
    }

    return loggedIn ? <Outlet /> : <Navigate to="/" replace />
};

export default AuthRequired;