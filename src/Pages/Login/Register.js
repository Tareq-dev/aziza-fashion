import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.auth";
import useToken from "../../Hooks/useToken";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let from = location?.state?.from?.pathname || "/";
  const [token] = useToken(user)
  if (error || updateError) {
    toast.error(error.message);
  }
  if (loading || updating) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      toast.error("You have to match both password");
    }
  };
  return (
    <div className="py-4">
      <div className="p-8 rounded-lg mt-5">
        <div className="flex justify-center">
          <h2 className="text-center w-80 rounded-lg bg-pink-500 text-white font-semibold py-2">Register</h2>
        </div>
        <div className="flex justify-center pt-8">
          <form
            onSubmit={handleCreateUser}
            className="flex-col justify-center mx-auto"
          >
            <label className="text-md mx-2">Name</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="name"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Email</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Password</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Confirm Password</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="password"
              required
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Login"
              className="border-2 rounded-lg px-4 py-2 block w-80 mt-5 cursor-pointer bg-blue-300 text-black text-xl"
            />
          </form>
        </div>
        <p className="text-center mt-5">
          Already have an account?
          <Link className="text-primary px-2" to="/login">
            Login
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

export default Register;




























// import { useEffect, useState } from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Loading from '../../components/Loading/Loading';
// import auth from '../../firebase.auth';
// import SocialLogin from './SocialLogin';

// const Register = ({ signInWithGoogle, guser, gloading, gerror }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [
//     createUserWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useCreateUserWithEmailAndPassword(auth);
//   // const [token] = useToken(user || guser);
//   const navigate = useNavigate()
//   if (user || guser) {
//     navigate("/");
//   }
//   const handleMatchPass = async () => {
//     if (password === confirmPassword) {
//       await createUserWithEmailAndPassword(email, password);
//     } else {
//       toast.error('You have to match both password!')
//     }
//   };
//   useEffect(()=>{
//     if (user) {
//         navigate("/");
//       }
//    },[user,navigate])
//   let err;
//   if (error) {
//     err =
//       <p>Error: {error.message}</p>

//   }
//   if (loading) {
//     return <Loading />
//   }
//   return (
//     <div className="flex justify-center py-20 m-3">
//       <div>
//         <h2 className="text-center w-full bg-pink-500 text-white font-semibold py-2">
//           Please Register
//         </h2>
//         <input
//           className="border-2 px-3 py-2 mb-3 mt-5 w-full"
//           type="email"
//           placeholder="Enter your email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <input
//           className="border-2 px-3 py-2 mb-3 mt-2 w-full"
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <input
//           className="border-2 px-3 py-2 mb-3 mt-2 w-full"
//           type="password"
//           placeholder="Confirm password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <br />
//         <div className="flex justify-center">
//           <button
//             className="bg-blue-300 font-semibold w-full py-2"
//             onClick={handleMatchPass}
//           >
//             Register
//           </button>
//         </div>
//         <p className='text-red-400 py-4'>{err}</p>
//         <p className="mt-1">Already have an account ?</p>
//         <p className="mt-1 text-blue-700">
//           <Link to="/login">Sign In .</Link>
//         </p>
//         <div className="text-center text-gray-400 mb-4">
//           __________ or __________
//           <p>Continue with</p>
//         </div>

//         <SocialLogin signInWithGoogle={signInWithGoogle} guser={guser} gloading={gloading} gerror={gerror} />
//       </div>
//     </div>
//   );
// };
// export default Register