import React from 'react'
import logo from '../../images/logo.png'

function Navbar() {
    return (
        <div className='flex items-center w-full justify-between px-24 py-6'>
            <img className='w-48 h-20' src={logo} alt="logo" />
            <div className='mt-4 items-center text-black font-bold ml-10'>
                <a className='mr-8' href=''>Home</a>
                <a className='mr-8' href='/product'>Product</a>
                <a className='mr-8' href=''>About</a>
                <a className='mr-8' href=''>Contact</a>
            </div>
            <input className='border w-80 h-8 rounded-lg bg-gray-100 text-black px-4' defaultValue="Search" />
        </div>
    )
}

export default Navbar
