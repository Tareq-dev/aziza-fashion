import React from 'react'
import auth from './../../firebase.auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

function SocialLogin() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

    let err;
    if (error) {

        err = 
            <p>Error: {error.message}</p>
    }

    if (loading) {
        return <Loading />
    }
    let useer;
    if (user) {
        useer =
            <div>
                <p>Signed In User: {user.user.email}</p>
            </div>

    }

    return (
        <div>
            <p className="text-red-500">{err ? error.message : ""}</p>
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
