import React from 'react'
import { Link } from 'react-router-dom'
import shopping from '../../images/shopping-bags.png'
function NewArrival() {
    return (
        <div className=' md:py-20 px-4 py-6 md:px-40'>
            <div className='flex  justify-between'>
                <h2 className='font-bold text-3xl'>New Arrival</h2>
                <Link to="/products" className='font-semibold mt-4'>VIEW ALL</Link>
            </div>
            <div className='flex flex-col md:flex-row md:py-10'>
                <div className='md:w-1/4'>
                    <img className='h-full w-full bg-darkblue' src={shopping} alt="" />
                </div>
                <div className='md:w-3/4 md:ml-6 w-full'>
                    <div className='flex w-full flex-col md:flex-row'>
                        <img className='md:w-56 md:h-48 my-1 md:my-0' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                        <img className='md:w-56 md:h-48 md:ml-10 my-1 md:my-0' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                        <img className='md:w-56 md:h-48 md:ml-10 my-1 md:my-0' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                    </div>
                    <div className='flex w-full flex-col md:flex-row mt-0 md:mt-8'>
                        <img className='md:w-56 md:h-48 md:mr-10 my-1 md:my-0' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                        <img className='md:w-56 md:h-48 md:mr-10 my-1 md:my-0' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                        <img className='md:w-56 md:h-48 md:mr-10 my-1 md:my-0' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival
