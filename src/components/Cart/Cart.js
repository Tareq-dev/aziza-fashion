import React from 'react'
import SingleCart from '../SingleCart/SingleCart'

function Cart({ cart }) {
    return (
        <div className='py-24 px-20'>
            <h1 className='text-4xl pb-4'>Shopping Cart</h1>
            <hr />
                <div className='py-4'>
                    {cart.map(c => <SingleCart c={c} key={c._id} />)}
                </div>
        </div>
    )
}

export default Cart
