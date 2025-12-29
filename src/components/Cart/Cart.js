import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, addToCard, onRemoveItem, itemsPrice }) {
  return (
    <div className="md:py-24 md:px-20 py-4 px-4">
      <h1 className="text-xl md:text-4xl pb-4">Shopping Cart</h1>
      <hr />
      <div className="py-4 md:flex md:flex-col md:items-center">
        {cart.length === 0 && (
          <div className="text-3xl text-center py-24">Cart is empty!!</div>
        )}

        {cart.map((item) => (
          <div
            key={item._id}
            className="flex h-20 justify-between items-center md:w-1/2 md:px-6 px-6 py-14 my-4 bg-white rounded-md"
          >
            <div className="flex md:justify-between items-center">
              <img className="w-20 h-20 object-contain" src={item.picture} alt="" />
              <div className="ml-4">
                <p className="w-48 font-semibold">{item.name}</p>
                <p className="text-sm">Price : {item.price} Tk</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => onRemoveItem(item)}
                    className="h-7 w-7 cursor-pointer text-xl font-bold bg-slate-200 rounded-full flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => addToCard(item)}
                    className="h-7 w-7 cursor-pointer text-xl font-bold bg-slate-200 rounded-full flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Remove single item */}
            <button
              onClick={() => onRemoveItem(item)}
              className="btn btn-sm bg-red-500 btn-circle"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <hr />
      <div className="bg-white py-4 flex justify-center items-center mt-4">
        <p className="text-end uppercase text-xl">Subtotal :</p>
        <p className="text-2xl font-bold ml-10">{itemsPrice} TK</p>
      </div>

      {cart.length > 0 && (
        <div className="flex justify-center items-center py-4">
          <Link to="/checkout">
            <button className="bg-orange-400 p-2 font-semibold text-white rounded-md">
              CHECKOUT
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
