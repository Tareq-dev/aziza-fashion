import React from 'react'
import auth from './../../firebase.auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

function SocialLogin() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let err;
    if (error) {

        err = 
            <p>Error: {error.message}</p>
    }

    if (loading) {
        return <p>Loading...</p>;
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
