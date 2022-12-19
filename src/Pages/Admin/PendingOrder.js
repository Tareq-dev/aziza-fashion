import React from 'react'
import useOrders from './../../Hooks/useOrder';

function PendingOrder() {
  const [orders] = useOrders([]);
  const unpaid = orders.filter(od => od.paid !== true);
  return (
    <div className='p-6'>
      <h2 className="text-2xl text-center py-2 font-bold">Pending Order</h2>

      <table className="table w-full my-8">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Phone</th>
            <th>Cancel</th>
            <th>Items</th>
          </tr>
        </thead>

        <tbody className=''>
          {unpaid.map(order => (
            <tr order={order} key={order._id} className=''>
              <td>
                {order.fullName}
              </td>

              {/* {order?.cart.map(cart => (
                <td key={cart._id} cart={cart} className='text-sm'>
                  <p>{cart.name} - {cart.quantity}</p>
                </td>
              ))
              } */}
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
              <td>
                {order.fullName}
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
