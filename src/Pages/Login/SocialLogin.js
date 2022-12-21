import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

function SocialLogin({ signInWithGoogle, guser, gloading, gerror }) {
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (guser) {
        navigate(from, { replace: true });
    }

    let err;
    if (gerror) {
        err =
            <p>Error: {gerror.message}</p>
    }

    if (gloading) {
        return <Loading />
    }
    let useer;
    if (guser) {
        useer =
            <div>
                <p>Signed In User: {guser.user.email}</p>
            </div>

    }

    return (
        <div>
            <p className="text-red-500">{err ? gerror.message : ""}</p>
            <p className="text-red-500">{useer}</p>
            <div className="flex justify-center mt-5">
                <button
                    onClick={() => signInWithGoogle()}
                    className="flex align-center border p-1 rounded-lg border-sky-400"
                >
                    <img
                        className="w-6"
                        src="https://i.ibb.co/5k5bzzG/google.png"
                        alt=""
                    />
                    <p className="mx-2">Google</p>
                </button>

            </div>
        </div>
    )
}

export default SocialLogin
