import React from 'react'

function BkashPayment() {
    return (
        <div className='bg-[#DF146E] p-4 text-white'>
            <p className='text-sm'>BKash Payment No :</p>
            <p className='text-xl font-bold'>0190XXXXXXXX</p>

            <div className='pb-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Your Bkash payment no</label>
                <input id="email" type="text" className='border w-full py-1 px-4' />
            </div>
            <div className='py-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
                <input id="email" type="text" className='border w-full py-1 px-4' />
            </div>
        </div>

    )
}

export default BkashPayment
