import React from 'react'

function SingleCart({c}) {
    
    return (
        <div className='flex h-20 items-center px-6 py-14 my-4 bg-white  rounded-md'>
            <img className='w-20 h-16' src={c.picture} alt="" />
            <p className='w-48 px-6 font-semibold'>{c.name}</p>
            <div className='px-20 text-center'>
                <p className='font-semibold py-2'>Price</p>
                <p>TK {c.price}</p>
            </div>
            <div className='px-20 text-center'>
                <p className='font-semibold py-2'>QTY</p>
                <p> <span className='px-4 text-xl font-bold'>-</span> 5 <span className='px-4 text-xl font-bold'> +</span>  </p>
            </div>
            <div className='px-20 text-center'>
                <p className='font-semibold py-2'>Total</p>
                <p>$15782</p>
            </div>
            <p className='px-20 text-center text-red-400'>Remove</p>
        </div>
    )
}

export default SingleCart
