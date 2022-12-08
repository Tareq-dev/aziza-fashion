import React, { useState } from 'react'

function SingleCart({ c }) {

    const [qty, setQty] = useState(c.quantity)
    const increaseQty = () => {
        let updatedQty = parseInt(qty) + 1
        setQty(updatedQty)
    }
    const decreaseQty = () => {
        const parseQty = parseInt(qty);
        if (parseQty > 0) {
            let updatedQty = parseQty - 1
            setQty(updatedQty)
        }
    }

    let total = 0;
    total = c.price * parseInt(qty);


    return (
        <div className='flex h-20 items-center px-6 py-14 my-4 bg-white  rounded-md'>
            <img className='w-20 h-16' src={c.picture} alt="" />
            <p className='w-48 px-6 font-semibold'>{c.name}</p>
            <div className='px-20 text-center'>
                <p className='font-semibold py-2'>Price</p>
                <p>TK {c.price}</p>
            </div>
            <div className='px-14 text-center'>
                <p className='font-semibold py-2'>QTY</p>
                <div className='flex justify-between items-center'>
                    <p onClick={decreaseQty} className='mx-10 h-8 w-8 cursor-pointer text-xl font-bold bg-slate-200 rounded-full'>-</p>
                    <p> {qty}</p>
                    <p onClick={increaseQty} className='mx-10 h-8 w-8 cursor-pointer text-xl font-bold bg-slate-200 rounded-full'> +</p>
                </div>
            </div>
            <div className='px-20 text-center'>
                <p className='font-semibold py-2'>Total</p>
                <p>Tk {total}</p>
            </div>
            <p className='px-20 text-center text-red-400'>Remove</p>
        </div>
    )
}

export default SingleCart
