import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import auth from "../../firebase.auth";
import Loading from "../../components/Loading/Loading";
import useToken from "../../Hooks/useToken";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user)
    if (error) {
        toast.error(error.message);
    }
    if (loading) {
        return <Loading />;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className="py-10">
            <div className="rounded-lg m-4">
                <div className="flex justify-center">
                    <h2 className="text-center rounded-lg w-80 bg-pink-500 text-white font-semibold py-2">Sign In</h2>
                </div>
                <div className="flex justify-center pt-8">
                    <form className="flex-col justify-center mx-auto px-4 ">
                        <label htmlFor="" className="text-md mx-2">
                            Email
                        </label>
                        <input
                            className="border-2 rounded-lg px-4 py-2 block w-80"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="" className="text-md mx-2 block mt-5">
                            Password
                        </label>
                        <input
                            className="border-2 rounded-lg px-4 py-2 block w-80"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="my-2"><Link to="/reset">Forgot Password ?</Link></p>

                        <button
                            className="border-2 rounded-lg px-4 py-2 block w-80 mt-5 bg-blue-300 text-black text-xl"
                            onClick={() => signInWithEmailAndPassword(email, password)}
                        >
                            Login
                        </button>
                    </form>
                </div>
                <p className="text-center mt-5">
                    New to Aziza Fasion?
                    <Link className="text-primary px-2" to="/register">
                        Create new account .
                    </Link>
                </p>
                <div className="text-center py-5 text-gray-400">
                    ________________OR________________
                </div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;






// import { useEffect, useState } from 'react';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Loading from '../../components/Loading/Loading';
// import auth from '../../firebase.auth';
// import SocialLogin from './SocialLogin';
// import useToken from './../../Hooks/useToken';

// const Login = ({ signInWithGoogle, guser, gloading, gerror }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);
//     const navigate = useNavigate();

//     const location = useLocation();
//     let from = location.state?.from?.pathname || "/";
//     // const token = useToken(user);
//     useEffect(() => {
//         if (user) {
//             navigate(from, { replace: true });
//         }
//     }, [user,from, navigate])
//     let err;
//     if (error) {
//         return (
//             err = <p>Error: {error.message}</p>
//         );
//     }
//     if (loading) {
//         return <Loading />
//     }


//     return (
//         <div className="flex justify-center py-20 m-3">
//             <form >
//                 <h2 className="text-center w-full bg-pink-500 font-semibold text-white py-2">
//                     Please Login
//                 </h2>
//                 <input
//                     className="border-2 px-3 py-2 mb-3 mt-5 w-full"
//                     type="email"
//                     placeholder="Enter your email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <br />
//                 <input
//                     className="border-2 px-3 py-2 mb-3 mt-2 w-full"
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <br />
//                 <div className="flex justify-center">
//                     <button onClick={() => signInWithEmailAndPassword(email, password)} className="bg-blue-300 w-full py-2 font-semibold">Login</button>
//                 </div>
//                 <p>{err}</p>
//                 <p className="flex justify-end mt-2 text-gray-400 text-sm">
//                     <Link to="/reset">forgot password?</Link>
//                 </p>
//                 <p className="mt-1">Don't have an account ?</p>
//                 <p className="mt-1 text-blue-700">
//                     <Link to="/register">Please Register .</Link>
//                 </p>
//                 <div className="text-center text-gray-400 mt-4 mb-4">
//                     __________ or __________
//                     <p className="pt-5">Continue with </p>
//                 </div>
//                 <SocialLogin signInWithGoogle={signInWithGoogle} guser={guser} gloading={gloading} gerror={gerror} />
//             </form>
//         </div>
//     );
// };

// export default Login