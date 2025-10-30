import { Outlet, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";

const ProtectedRoutes = () => {
    const { token, expiry } = useContext(AppContext)
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        if (!token || new Date() > expiry) {
            setIsValid(false);
            return;
        }

        axios.post('/api', { action: "checkToken", token })
        .then(res => setIsValid(res.data.success))
        .catch(() => setIsValid(false));
    }, [token, expiry]);

    if (isValid === null) return <Loading/>;
    return isValid ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;