import React from 'react'
import shopping from '../../images/shopping-bags.png'
function NewArrival() {
    return (
        <div className='py-20 px-40'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl'>New Arrival</h2>
                <p className='font-semibold mt-4'>VIEW ALL</p>
            </div>
            <div className='flex py-10'>
                <div className='w-1/4'>
                    <img className='h-full w-full bg-darkblue' src={shopping} alt="" />
                </div>
                <div className='w-3/4 ml-6'>
                    <div className='flex w-full'>
                        <img className='w-56 h-48' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                        <img className='w-56 h-48 ml-10' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                        <img className='w-56 h-48 ml-10' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                    </div>
                    <div className='flex w-full mt-8'>
                        <img className='w-56 h-48' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                        <img className='w-56 h-48 ml-10' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                        <img className='w-56 h-48 ml-10' src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival
