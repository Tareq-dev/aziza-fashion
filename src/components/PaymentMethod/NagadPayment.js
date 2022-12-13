import React from 'react'

function NagadPayment() {
    return (
        <div className='bg-[#f7941d] p-4'>
            <p className='text-sm'>Nagad Payment No :</p>
            <p className='text-xl font-bold'>0190XXXXXXXX</p>
            <div className='pb-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Your Nagad payment no</label>
                <input id="email" type="text" className='border w-full py-1 px-4' />
            </div>
            <div className='py-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
                <input id="email" type="text" className='border w-full py-1 px-4' />
            </div>
        </div>
    )
}

export default NagadPayment
