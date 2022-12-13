import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from "./SocialLogin";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from "react";
import auth from './../../firebase.auth';
import { useLocation } from 'react-router-dom';
import Loading from "../../components/Loading/Loading";

const CustomLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }


  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading/> 
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.user.email}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-20 m-3">
      <form >
        <h2 className="text-center w-full bg-black text-white py-2">
          Please Login
        </h2>
        <input
          className="border-2 px-3 py-2 mb-3 mt-5 w-full"
          type="email"
          placeholder="Enter your email address"
          value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {/* <p className="mx-2 mb-2 text-red-500">{error ? error.message : ""}</p> */}
        <div className="flex justify-center">
          <button onClick={() => signInWithEmailAndPassword(email, password)} className="bg-sky-400 w-full py-2">Login</button>
        </div>
        <p className="flex justify-end mt-2 text-gray-400 text-sm">
          <Link to="/reset">forgot password?</Link>
        </p>
        <p className="mt-1">Don't have an account ?</p>
        <p className="mt-1 text-blue-700">
          <Link to="/register">Please Register .</Link>
        </p>
        <div className="text-center text-gray-400 mt-4 mb-4">
          __________ or __________
          <p className="pt-5">Continue with </p>
        </div>
        <SocialLogin />
      </form>
    </div>
  );
};

export default CustomLogin;