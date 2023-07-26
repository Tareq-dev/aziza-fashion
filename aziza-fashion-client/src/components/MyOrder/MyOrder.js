import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.auth';

function MyOrder() {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    // const [card, setCard] = useState([])
    const email = user?.email;
    useEffect(() => {
        fetch(`https://aziza-fashion-world.onrender.com/order/${email}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [email]);

    const orderHistory = order.slice(1).map(o => o);



    let lastElement = order[order.length - 1];

    // const removeOrder = (cart) => {
    //     const findCart = lastElement?.cart.find((x) => x._id === cart._id)
    //     const id = lastElement._id;
    //     const cartId = findCart._id;
    //     // const last = order.find(x => x.cart._id === findItem)
    //     // console.log(last)

    //     fetch(`https://aziza-fashion-world.onrender.com/orders/cart/${id}/${cartId}`, {
    //         method: "DELETE",
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //         });
    // }
    return (
        <div>
            <div className='md:mx-4 px-4'>
                <p className='text-center py-4'>Recent Order</p>
                <div className='md:grid md:grid-cols-3 md:gap-5'>
                    {lastElement?.cart.map((oc) => (
                        <div oc={oc} ke={oc._id} className="card w-92 md:w-full bg-base-100 shadow-xl my-2 md:mx-auto">
                            <div className="md:p-4 p-2">
                                <div className='flex flex-col md:flex-row'>
                                    <div className='flex items-center'>
                                        <img className='w-24 h-24' src={oc.picture} alt="" />
                                        <div className='px-4'>
                                            <h4>{oc.name} ({oc.quantity} pcs) </h4>
                                            <p className='text-xs'> Order :
                                                {oc?.shipment ? "Payment Success" : " Pending"}

                                            </p>
                                            <p>
                                                <span className='text-pink-400 py-2 text-xs rounded-2xl'>Shipment :{oc?.shipment ? "Done" : " Processing..."}</span>
                                            </p>
                                            <p className='text-xs'>
                                                Receive within 2 days
                                            </p>
                                        </div>

                                    </div>
                                    <div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <p className='text-center py-8 font-semibold text-md'>Previous Orders</p>
                <div className='md:grid md:grid-cols-3 md:gap-5'>
                    {orderHistory[0]?.cart.map((oc) => (
                        <div oc={oc} key={oc._id} className="card w-92 md:w-full bg-base-100 shadow-xl my-2 md:mx-auto">
                            <div className="md:p-4 p-2">
                                <div className='flex flex-col md:flex-row'>
                                    <div className='flex items-center'>
                                        <img className='w-24 h-24' src={oc.picture} alt="" />
                                        <div className='px-4'>
                                            <h4>{oc.name} ({oc.quantity} pcs) </h4>
                                            <p className='text-xs'> Order :
                                                {oc?.shipment ? "Payment Success" : " Pending"}

                                            </p>
                                            <p>
                                                <span className='text-pink-400 py-2 text-xs rounded-2xl'>Shipment :{oc?.shipment ? "Done" : " Processing..."}</span>
                                            </p>
                                            <p className='text-xs'>
                                                Receive within 2 days
                                            </p>
                                        </div>

                                    </div>
                                    <div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyOrder
