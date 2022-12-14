import React from 'react'
import logo from '../../images/logo.png'
import { BsCartDash } from 'react-icons/bs';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import auth from './../../firebase.auth';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


function Navbar({ cart }) {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    };
    return (
        <div className='flex bg-blue-200 items-center w-full justify-between px-8 py-2'>
            <img className='w-32 h-14' src={logo} alt="logo" />
            <div className='mt-4 items-center text-black ml-10'>
                <Link className='mr-8' to='/'>Home </Link>
                <Link className='mr-8' to='/products'>Product</Link>
                {user?.email ? (
                    <button
                        onClick={logOut}
                        className="btn btn-sm mr-8 btn-outline btn-info"
                    >
                        Sign Out
                    </button>
                ) : (
                    <Link className='mr-8' to='/login'>Login</Link>
                )}

                <Link className='mr-8' to='/contact'>Contact</Link>
            </div>
            <input className='border w-80 h-8 bg-gray-100 text-black px-4' defaultValue="Search" />
            <Link to="/cart" className='flex relative'>
                <p className='bg-red-600 text-white rounded-lg font-semibold text-md absolute top-[-8px] right-1 px-1'>
                    {cart.length}
                </p>
                <BsCartDash className='mt-3 ml-4' size={30} />
            </Link>
            { user?.email ? <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} className='flex items-center'>
                    <img className="p-1 w-10 h-10 rounded-full ring-2 dark:ring-green-500 m-1" alt="" src={user?.photoURL} />
                    <AiOutlineCaretDown />
                </div>

                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 top-[60px] rounded-box w-52 right-[-30px]">
                    <p className='text-sm px-4'>Signed in as</p>
                    <p className='font-bold px-4'>{user?.displayName}</p>
                    <hr />
                    <li><Link className='my-1 text-sm h-8' to="/myorder">My Order</Link></li>
                    <li><Link className='my-1 text-sm h-8' to="">My Wishlist</Link></li>
                    <li><Link className='my-1 text-sm h-8' to="">My Review</Link></li>
                </ul>
            </div>:""}

        </div>
    )
}

export default Navbar
