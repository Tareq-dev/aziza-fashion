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