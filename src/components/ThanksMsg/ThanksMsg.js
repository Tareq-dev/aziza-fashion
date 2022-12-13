import React from 'react'
import delivery from "../../images/delivery.gif"
function ThanksMsg() {
    return (
        <div className='App'>
            <div className='flex justify-center items-center pt-14 pb-5'>
                <img className='h-48' src={delivery} alt="" />
            </div>
            <div className=' px-40'>
                <h1 className='text-2xl font-bold text-green-500'>Thanks For Shopping</h1>
                <h3 className='text-xl py-4'>Your Shipment Will be On The Way After Payment Confirmation !!</h3>
                <p className='text-lg'>Call Us For Early Payment Confirmation</p>
                <p className='text-lg'>Or</p>
                <p className='text-lg'> Wait For Our Response Within 10 Hrs</p>
            </div>
        </div>
    )
}

export default ThanksMsg
