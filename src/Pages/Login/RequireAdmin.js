import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import Loading from "../../components/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.auth";
import useAdmin from "../../Hooks/useAdmin";
const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, loadAdmin] = useAdmin(user);
    const location = useLocation();
    if (loading || loadAdmin) {
        return <Loading />;
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;