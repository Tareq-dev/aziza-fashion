import React from 'react'
import Navbar from '../Navbar/Navbar'
import banner from '../../images/banner.png'
import { IoIosArrowDropright } from 'react-icons/io';


function Banner() {
    return (
        <div className='bg-darkblue'>
            <Navbar />
            <div className='flex py-4 px-40'>
                <div className='w-1/2 py-10'>
                    <h4 className='text-2xl font-bold text-pink-600'>Trendy Collection</h4>
                    <h1 className='text-6xl font-[700] text-black '>Shop for </h1>
                    <h1 className='text-6xl font-[700] text-black '>what you want</h1>
                    <p className='py-6 text-black text-md'>Veniam id laboris ex amet ad est excepteur. Proident et veniam deserunt non elit. Laborum eiusmod cillum mollit laborum fugiat.</p>
                    <div>
                        <button className='px-4 py-4 flex items-center justify-center rounded-[50px] mt-6 font-bold text-xl bg-[#f7941d]' type="">Start Shopping <IoIosArrowDropright className='ml-2' size={25} /></button>

                    </div>

                </div>
                <div className='w-1/2'>
                    <img className='w-100' src={banner} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default Banner
