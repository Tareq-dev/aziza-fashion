import React, { useState } from 'react'
import useOrders from './../../Hooks/useOrder';
import { GoBook } from 'react-icons/go';
import CartModal from './CartModal';


function PendingOrder() {
  const [orders] = useOrders([]);
  const unpaid = orders.filter(od => od.paid !== true);
  const [cartArray, setCartAray] = useState([])
  const [customer, setCustomer] = useState([])


  const cartDetails = (id) => {

    const order = unpaid.find(order => order._id === id)
    const customerName = order.fullName
    const cartArr = order?.cart;
   
    setCartAray(cartArr)
    setCustomer(customerName)

  }


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
                {order?.itemsQty}
              </td>
              <td>
                {order?.itemsPrice}
              </td>
              <td>
                {order?.phoneNo}
              </td>
              <td className='text-red-400'>
                Unpaid
              </td>
              <td>
                <label onClick={() => cartDetails(order._id)} htmlFor="my-modal-5"><GoBook size={24} /></label>
                <div>
                  <CartModal cartArray={cartArray} customer={customer} />
                </div>
              </td>

              {/* Put this part before </body> tag */}

            </tr>
          ))
          }

        </tbody>

      </table>
    </div>
  )
}

export default PendingOrder
