import React from 'react'
import { Link } from 'react-router-dom'
import shopping from '../../images/shopping-bags.png'
function NewArrival() {
    return (
        <div className=' md:py-20 px-4 py-6 md:px-40'>
            <div className='flex  justify-between pb-2'>
                <h2 className='font-bold text-2xl md:text-3xl'>New Arrival</h2>
                <Link to="/products" className='font-semibold text-pink-500 mt-5'>VIEW ALL</Link>
            </div>
            <div className='flex flex-col md:flex-row md:py-10'>
                <div className='md:w-1/4'>
                    <img className='h-full w-full bg-darkblue' src={shopping} alt="" />
                </div>
                <div className='md:w-3/4 md:ml-6 w-full'>
                    <div className='flex w-full flex-col md:flex-row'>
                        <img className='md:w-56 md:h-48 my-1 md:my-0' src="https://i.ibb.co/0tDpxF9/1.png" alt="" />
                        <img className='md:w-56 md:h-48 md:ml-10 my-1 md:my-0' src="https://i.ibb.co/42hfL02/2.png" alt="" />
                        <img className='md:w-56 md:h-48 md:ml-10 my-1 md:my-0' src="https://i.ibb.co/h7Dh827/3.png" alt="" />
                    </div>
                    <div className='flex w-full flex-col md:flex-row mt-0 md:mt-8'>
                        <img className='md:w-56 md:h-48 md:mr-10 my-1 md:my-0' src="https://i.ibb.co/mvzYxkX/4.png" alt="" />
                        <img className='md:w-56 md:h-48 md:mr-10 my-1 md:my-0' src="https://i.ibb.co/HLZpQPD/5.png" alt="" />
                        <img className='md:w-56 md:h-48 md:mr-10 my-1 md:my-0' src="https://i.ibb.co/hZkHCFg/6.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival
