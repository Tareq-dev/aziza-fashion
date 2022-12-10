import React from 'react'
import logo from '../../images/logo.png'
import { BsCartDash } from 'react-icons/bs';
import { Link } from 'react-router-dom'


function Navbar({ cart }) {
    return (
        <div className='flex bg-blue-200 items-center w-full justify-between px-24 py-2'>
            <img className='w-32 h-14' src={logo} alt="logo" />
            <div className='mt-4 items-center text-black font-bold ml-10'>
                <Link className='mr-8' to='/'>Home </Link>
                <Link className='mr-8' to='/products'>Product</Link>
                <Link className='mr-8' to='/about'>About</Link>
                <Link className='mr-8' to='/contact'>Contact</Link>
            </div>
            <input className='border w-80 h-8 bg-gray-100 text-black px-4' defaultValue="Search" />
            <Link to="/cart" className='flex relative'>
                <p className='bg-red-600 text-white rounded-lg font-semibold text-md absolute top-[-8px] right-1 px-1'>
                    {cart.length}
                </p>
                <BsCartDash className='mt-3 ml-4' size={30} />
            </Link>
        </div>
    )
}

export default Navbar
