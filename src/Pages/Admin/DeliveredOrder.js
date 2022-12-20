import React, { useState } from 'react'
import useOrders from '../../Hooks/useOrder';
import { GoBook } from 'react-icons/go';
import CartModal from './CartModal';


function DeliveredOrder({shipment}) {
  const [orders] = useOrders([]);
  const deliveredItem = orders.filter(od => od.shipment === true && od.paid === true);
  const [cartArray, setCartAray] = useState([])
  const [orderData, setOrderData] = useState([])

  const cartDetails = (id) => {

    const order = deliveredItem.find(order => order._id === id)
    const cartArr = order?.cart;
    setCartAray(cartArr)
    setOrderData(order)
  }

  return (
    <div className='p-6'>
      <h2 className="text-2xl text-center py-2 mb-2">Pendind Order</h2>

      <table className="table w-full my-8">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Payment No</th>
            <th>Trx No</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Shipment</th>
            <th>Items</th>
          </tr>
        </thead>

        <tbody className=''>
          {deliveredItem.map(order => (
            <tr order={order} key={order._id} className=''>
              <td>
                {order.fullName}
              </td>
              <td className=''>
                {order?.itemsQty} Pcs
              </td>
              <td>
                {order?.itemsPrice} Tk
              </td>
              <td>
                {order?.phoneNo}
              </td>
              <td>
                {order?.bkashPaymentNo || order?.nagadPaymentNo || order?.rocketPaymentNo}
              </td>
              <td>
                {order?.bkashTrxId || order?.nagadTrxId || order?.rocketTrxId}
              </td>
              <td className='text-green-400'>
                {order.paid ? "Paid" : "Unaid"}
              </td>
              <td className={order.shipment ? "bg-green-200" : "bg-red-200"}>
                {order.shipment ? "Delivered" : "Not Delivered"}
              </td>
              <td>
                <label onClick={() => cartDetails(order._id)} htmlFor="my-modal-5"><GoBook size={24} /></label>
                <div>
                  <CartModal cartArray={cartArray} orderData={orderData} shipment={shipment} />
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

export default DeliveredOrder
