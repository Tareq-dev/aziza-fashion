import React from 'react'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className='flex items-center w-full justify-between px-24 py-6'>
            <img className='w-48 h-20' src={logo} alt="logo" />
            <div className='mt-4 items-center text-black font-bold ml-10'>
                <Link className='mr-8' to='/'>Home </Link>
                <Link className='mr-8' to='/products'>Product</Link>
                <Link className='mr-8' to='/about'>About</Link>
                <Link className='mr-8' to='/contact'>Contact</Link>
            </div>
            <input className='border w-80 h-8 rounded-lg bg-gray-100 text-black px-4' defaultValue="Search" />
        </div>
    )
}

export default Navbar
