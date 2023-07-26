import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import { BsCartDash } from 'react-icons/bs';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import auth from './../../firebase.auth';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


function Navbar({ cart }) {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        fetch(`https://aziza-fashion-world.onrender.com/user/${email}`)
            .then((res) => res.json())
            .then((data) => setSingleUser(data));
    }, [email]);

    const logOut = () => {
        signOut(auth);
    };
    return (
        <div className="navbar md:px-8 bg-blue-200 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48">
                        <Link className='px-4 py-1' to='/'>Home </Link>
                        <Link className='px-4 py-1' to='/products'>Product</Link>
                        <Link className='px-4 py-1' to='/contact'>Contact</Link>
                        {!user?.email &&
                            <Link className='px-4 py-1' to='/login'>Login</Link>
                        }
                        <input className='border w-full py-1 md:hidden h-8 bg-gray-100 text-black px-4 rounded-md' placeholder="Search" />
                    </ul>
                </div>
                <Link to="/"><img className='w-24 h-12 md:w-32 md:h-14' src={logo} alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link className='mr-8' to='/'>Home </Link>
                    <Link className='mr-8' to='/products'>Product</Link>
                    <Link className='mr-8' to='/contact'>Contact</Link>
                    {!user?.email &&
                        <Link className='mr-8' to='/login'>Login</Link>
                    }
                </ul>
            </div>
            <div className='navbar-end'>
                <input className='border hidden md:block md:w-80 h-8 bg-gray-100 text-black px-4 rounded-md' placeholder="Search" />
                <Link to="/cart" className='flex relative mr-2'>
                    <p className='bg-red-600 text-white rounded-lg font-semibold text-md absolute top-[-8px] right-1 px-1'>
                        {cart.length}
                    </p>
                    <BsCartDash className='mt-3 ml-4' size={30} />
                </Link>
                {user?.email ? <div className="dropdown dropdown-bottom dropdown-end pr-2">
                    <div tabIndex={0} className='flex items-center'>
                        <img className="p-1 w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 dark:ring-green-500 m-1" alt="" src={user?.photoURL} />
                        <AiOutlineCaretDown />
                    </div>

                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 top-[60px] rounded-box w-32 md:w-52 right-[-30px]">
                        <p className='text-sm px-4'>Signed in as</p>
                        <p className='font-bold px-4'>{user?.displayName}</p>
                        <hr />
                        {singleUser?.role === "admin" || user?.email && <li><Link className='my-1 text-sm h-8' to="/myorder">My Order</Link></li>}
                        {singleUser?.role === "admin" || user?.email && <li><Link className='my-1 text-sm h-8' to="">My Review</Link></li>}
                        {singleUser?.role === "admin" && <li><Link className='my-4 text-sm h-8 w-24 bg-blue-500 py-2 text-white font-semibold' to="/dashboad">Admin</Link></li>}
                        <li><button
                            onClick={logOut}
                            className="my-1 text-sm h-8"
                        >
                            Log Out
                        </button></li>
                    </ul>
                </div> : ""}
            </div>
        </div>
    )
}

export default Navbar
