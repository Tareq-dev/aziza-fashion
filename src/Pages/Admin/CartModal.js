import React from 'react'

function CartModal({ cartArray, orderData, shipment }) {
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-8/12 h-96">
                    <h1 className='text-xl pt-2 font-semibold'>{orderData?.fullName}</h1>
                    <p className='text-md'>Adress : {orderData?.adress}, {orderData?.city}</p>
                    <p className='text-md pb-2 '>Extra Phone No: {orderData?.extPhone}</p>
                    {cartArray.map(cart => (
                        <div cart={cart} key={cart._id} className="border p-4">
                            <h3 className="text-sm">{cart.name} - {cart.quantity} Pcs</h3>
                        </div>))
                    }
                    <div className="modal-action justify-center">
                        <label onClick={()=>shipment(orderData)} htmlFor="my-modal-5" className="border bg-green-400 shadow-md font-semibold px-6 py-1 rounded">Paid</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal
