import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.auth';

function MyOrder() {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    // const [card, setCard] = useState([])
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`)
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

    //     fetch(`http://localhost:5000/orders/cart/${id}/${cartId}`, {
    //         method: "DELETE",
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //         });
    // }
    return (
        <div className="overflow-x-auto w-full px-14">
            <table className="table w-full my-14">
                <thead>
                    <tr>
                        <th className='w-52 px-4'>Items</th>
                        <th >Payment</th>
                        <th>Delivery</th>
                        <th>Cancel</th>
                    </tr>
                </thead>

                <tbody className=''>

                    {
                        lastElement?.cart.map(oc => (
                            <tr key={oc._id} oc={oc} className='border py-2'>
                                <td className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={oc.picture} alt="" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <p className="font-bold text-xl">{oc?.name}</p>
                                        <p className="text-lg opacity-80 ml-6">{oc?.quantity} Pcs</p>
                                    </div>
                                </td>
                                <td className=''>
                                    {oc?.shipment ? "Payment Success" : " Pending"}
                                    <br />
                                    <p className="badge mt-2 py-2 badge-success text-white badge-sm ">{oc?.shipment ? "Thanks for shopping" : " Wait few times "}</p>
                                </td>
                                <td>
                                    <span className='text-pink-400 py-2 px-4 rounded-2xl'>{oc?.shipment ? "Shipment Done" : " Processing... "}</span>
                                </td>
                                <th>
                                    Receive within 2 days
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='flex justify-center'>
                <p className='text-xl font-extrabold py-8'>Previous Order History</p>
            </div>
            <table className="table w-full">
                <tbody className=''>

                    {
                        order[0]?.cart.map(oc => (
                            <tr key={oc._id} oc={oc} className='border py-2'>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={oc.picture} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-xl">{oc?.name}</div>
                                            <div className="text-lg opacity-80 ml-6">{oc?.quantity} Pcs</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    {oc.paid ? "Payment Success" : " Pending"}
                                    <br />
                                    <p className="badge mt-2 py-2 badge-success text-white badge-sm ">{oc.paid ? "Thanks for shopping" : " Wait few times "}</p>
                                </td>
                                <td>
                                    <span className='bg-pink-300 py-2 px-4 rounded-2xl font-bold'>Processing...</span>
                                </td>
                                <th>
                                    Receive within 2 days
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyOrder
