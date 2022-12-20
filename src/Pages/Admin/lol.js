<div className="overflow-x-auto w-full md:px-14">
<table className="table w-full my-14">
    <thead>
        <tr>
            <th className='md:w-52 md:px-4'>Items</th>
            <th >Payment</th>
            <th>Delivery</th>
            <th>Cancel</th>
        </tr>
    </thead>

    <tbody className=''>

        {
            lastElement?.cart.map(oc => (
                <div key={oc._id} oc={oc} className='border py-2'>
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
                    <p className=''>
                        {oc?.shipment ? "Payment Success" : " Pending"}
                        <br />
                        <p className="badge mt-2 py-2 badge-success text-white badge-sm ">{oc?.shipment ? "Thanks for shopping" : " Wait few times "}</p>
                    </p>
                    <p>
                        <span className='text-pink-400 py-2 px-4 rounded-2xl'>{oc?.shipment ? "Shipment Done" : " Processing... "}</span>
                    </p>
                    <p>
                        Receive within 2 days
                    </p>
                </div>
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
            orderHistory[0]?.cart.map(oc => (
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
</div>