import React from 'react'

function CartModal({ cartArray, customer }) {
    console.log(customer)
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-8/12 ">
                    <h1 className='text-xl py-2 font-semibold'>{customer}</h1>
                    {cartArray.map(cart => (
                        <div cart={cart} key={cart._id}>
                            <h3 className="text-sm">{cart.name} - {cart.quantity}</h3>
                        </div>))
                    }
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="border bg-green-400 shadow-md font-semibold px-4 py-1 rounded">Paid</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal
