import React from 'react'
import useOrders from './../../Hooks/useOrder';

function PendingOrder() {
  const [orders] = useOrders([]);
  const unpaid = orders.filter(od => od.paid !== true);
  return (
    <div className='p-6'>
      <h2 className="text-2xl text-center py-2 mb-2">Pendind Order</h2>
      
      <table className="table w-full my-14">
        <thead>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Phone</th>
            <th>Cancel</th>
          </tr>
        </thead>

        <tbody className=''>
          {unpaid.map(order => (
            <tr order={order} key={order._id} className=''>
              <td>
                {order.fullName}
              </td>
              <td className=''>
                {order.itemsQty}
              </td>
              <td>
                {order.itemsPrice}
              </td>
              <td>
                {order.phoneNo}
              </td>
              <td className='text-red-400'>
                Paid 
              </td>
              
            </tr>
          ))
          }
          
        </tbody>
       
      </table>
    </div>
  )
}

export default PendingOrder
