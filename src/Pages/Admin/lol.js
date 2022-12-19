













{/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box w-8/12 ">
                  <h1 className='text-xl font-bold py-1'>{order.fullName}</h1>
                    <div>

                      <h3 className="text-sm">{cart?.name} - {cart?.quantity} Pcs</h3>
                    </div>
                  <div className="modal-action">
                    <label htmlFor="my-modal-5" className="border bg-green-400 shadow-md font-semibold px-4 py-1 rounded">Paid</label>
                  </div>
                </div>
              </div> */}












<table className="table w-full my-8">
  <thead>
    <tr>
      <th>Customer</th>
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
        {/* <td>
                {order.fullName}
              </td> */}
        {order?.cart.map(cart => (
          <td key={cart._id} cart={cart} className='text-sm'>
            <span>{cart.name} - {cart.quantity}</span>
          </td>
        ))
        }
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