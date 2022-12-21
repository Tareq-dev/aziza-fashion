import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.auth';



function ShippingDetailsPreview({ cart }) {
    const [check, setCheck] = useState(false)
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email]);

    let order = orders[orders.length - 1];
    const id = order?._id;

    const payment = {
        PaymentId: id,
    };

    const handlePayment = () => {

        fetch(`http://localhost:5000/payment/${email}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.modifiedCount === 1) {
                    navigate("/confirmation")
                }
            });

    }

    return (
        <div className='md:m-20  md:px-10 px-2 py-14 bg-white'>
            <h1 className='md:text-3xl text-xl font-bold pb-8 text-center'>Preview All Details</h1>
            <table className='w-full border py-8'>
                <thead>
                    <tr>
                        {/* <th /> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border h-14 w-1/4 text-center text-2xl'>Email</td>
                        <td className='border h-14 w-3/4 px-6'>{order?.email}</td>
                    </tr>
                    <tr>
                        <td className='border w-1/4  h-14 text-center'>Name</td>
                        <td className='border w-3/4 h-14 px-6'>{order?.fullName} ({order?.nickName})</td>
                    </tr>
                    <tr>
                        <td className='border w-1/4  h-14 text-center'>Adress</td>
                        <td className='border w-3/4 h-14 px-6'>{order?.adress}</td>
                    </tr>
                    <tr>
                        <td className='border w-1/4  h-14 text-center'>House Name</td>
                        <td className='border w-3/4 h-14 px-6'>{order?.houseName}</td>
                    </tr>
                    <tr>
                        <td className='border w-1/4  h-14 text-center'>Phone No</td>
                        <td className='border w-3/4 h-14 px-6'>{order?.phoneNo}</td>
                    </tr>
                    <tr>
                        <td className='border w-1/4  h-14 text-center'>Another Phone No</td>
                        <td className='border w-3/4 h-14 px-6'>{order?.extPhone}</td>
                    </tr>
                    <tr>
                        <td className='border w-1/4  h-14 text-center'>Payment No</td>
                        <td className='border w-3/4 h-14 px-6'>{order?.bkashPaymentNo || order?.nagadPaymentNo || order?.rocketPaymentNo} </td>
                    </tr>
                    <tr>
                        <td className='border w-1/4  h-14 text-center'>Trx Id</td>
                        <td className='border w-3/4 h-14 px-6'>
                            {order?.bkashTrxId || order?.nagadTrxId || order?.rocketTrxId
                            }</td>
                    </tr>
                    <tr>
                        <td className='border w-1/4  h-14 text-center'>Total Cost</td>
                        <td className='border w-3/4 h-14 px-6'>
                            {order?.itemsPrice} Tk</td>
                    </tr>
                    {cart.map(c =>
                    (<tr c={c} key={c._id}>
                        <td className='border w-1/4  h-14 text-center'>{c.name}</td>
                        <td className='border w-3/4 h-14 px-6'>
                            {c.quantity} Pcs</td>
                    </tr>)
                    )
                    }

                </tbody>
            </table>
            <div>
                <div className='flex justify-center items-center mt-5'>
                    <div onClick={() => setCheck(!check)} className='w-6 h-6 bg-white border'>
                        {check === true && <span className="p-1">&#10003;</span>}
                    </div>
                    <p className='ml-2 text-sm font-bold'>My all Information are true.</p>
                </div>
                <div className='flex justify-center items-center py-4'>

                    <button disabled={!check} onClick={!check ? undefined : handlePayment} className='bg-pink-600 px-4 py-2 font-semibold  text-white rounded-md' type="" >
                        Payment
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ShippingDetailsPreview
