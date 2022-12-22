import React from 'react'
import banner from '../../images/banner.png'
import { IoIosArrowDropright } from 'react-icons/io';


function Banner() {
    return (
            <div className='flex flex-col md:flex-row pt-4 md:pt-14 md:px-24 md:pb-8'>
                <div className='md:w-1/2 md:py-10 px-10 w-full'>
                    <h4 className='text-4xl font-bold text-pink-600'>Trendy Collection</h4>
                    <h1 className='md:text-6xl text-3xl font-[700] text-black '>Shop for </h1>
                    <h1 className='md:text-6xl text-3xl font-[700] text-black '>what you want</h1>
                    <p className='md:py-4 py-3 text-black text-md text-xl text-justify'>Veniam id laboris ex amet ad est excepteur. Proident et veniam deserunt non elit. Laborum eiusmod cillum mollit laborum fugiat.</p>
                    <div>
                        <button className='px-2 md:px-4 py-1 md:py-2 flex items-center justify-center rounded-[50px] mt-4 md:mt-6 font-bold text-xl bg-[#fca943]' type="">Start Shopping <IoIosArrowDropright className='ml-2' size={25} /></button>

                    </div>

                </div>
                <div className='md:w-1/2 py-4 px-2 md:px-4 w-full'>
                    <img className='w-100' src={banner} alt="banner" />
                </div>
            </div>
    )
}

export default Banner
