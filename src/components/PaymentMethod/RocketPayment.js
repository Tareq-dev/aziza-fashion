import React from 'react'

function RocketPayment() {
    return (
        <div className='bg-[#8c3494] p-4 text-white'>
            <p className='text-sm'>Rocket Payment No :</p>
            <p className='text-xl font-bold'>0190XXXXXXXX</p>

            <div className='py-2'>
                <label htmlFor="email" className='block text-md font-bold pb-2'>Your Rocket payment no</label>
                <input id="email" type="text" className='border w-full py-1 px-4' />
            </div>
            <div className='py-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
                <input id="email" type="text" className='border w-full py-1 px-4' />
            </div>
        </div>
    )
}

export default RocketPayment
