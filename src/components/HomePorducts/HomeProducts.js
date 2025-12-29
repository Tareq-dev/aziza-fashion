import React from "react";
import useProducts from "../../Hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../../Pages/Products/CartModal";

function HomeProducts({
  addToCard,
  cart,
  onRemoveItem,
  onRemoveCart,
  itemsPrice,
  check,
  setCheck,
}) {
  const [products] = useProducts([]);

  const navigate = useNavigate();

  const singleProduct = (id) => {
    navigate(`/singleProduct/${id}`);
  };

  return (
    <div className="md:px-5 md:py-4 px-2 mx-4 md:mx-16">
      <h1 className="px-5 text-3xl text-center md:text-4xl font-semibold uppercase pt-8 pb-14">
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
        {products?.slice(0, 8).map((product) => (
          // <Product product={product} key={product._id} addToCard={addToCard} cart={cart} onRemoveItem={onRemoveItem} onRemoveCart={onRemoveCart} itemsPrice={itemsPrice} check={check} setCheck={setCheck} />
          <div
            product={product}
            key={product._id}
            addToCard={addToCard}
            cart={cart}
            onRemoveItem={onRemoveItem}
            onRemoveCart={onRemoveCart}
            itemsPrice={itemsPrice}
            check={check}
            setCheck={setCheck}
            className="md:px-4 px-1 my-2 py-2 bg-white shadow-lg rounded-md relative"
          >
            <div
              htmlFor="my-modal-8"
              className="absolute cursor-pointer md:top-4 md:right-4 top-2 right-1 border-l-4 border-l-red-500  bg-black text-white text-xs md:text-sm px-2 py-1 rounded font-semibold"
            >
              <label htmlFor="my-modal-3" onClick={() => addToCard(product)}>
                Add to card
              </label>
              <CartModal
                addToCard={addToCard}
                cart={cart}
                onRemoveItem={onRemoveItem}
                onRemoveCart={onRemoveCart}
                itemsPrice={itemsPrice}
                check={check}
                setCheck={setCheck}
              />
            </div>

            <img
              className="rounded-md h-48 md:h-64 w-full"
              src={product.picture}
              alt=""
            />
            <div>
              <div className="">
                <h4 className="title-font md:text-lg text-gray-600 px-2">
                  {product.name}
                </h4>

                <div className="flex justify-between items-end px-2">
                  <div>
                    <p className="font-semibold text-md text-black">
                      TK {product.price}
                    </p>
                    <p className="text-xs text-pink-500">
                      {product.rating} Review
                    </p>
                    {/* <ReactStars className=''
                                        count={5}
                                        onChange={ratingChanged}
                                        size={20}
                                        color2={'#ffd700'} /> */}
                  </div>
                  <div className="flex justify-center items-center rounded-md bg-gray-700 h-6">
                    <button
                      onClick={() => singleProduct(product._id)}
                      className="text-white text-xs md:text-md px-2"
                    >
                      Details
                      {/* {product.rating} 
                                        <AiFillStar className='ml-2' size={20} /> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-14 md:pt-24 pb-5 flex justify-center ">
        <Link
          to="/products"
          className="bg-pink-200 px-8 py-1 text-black font-bold text-xl rounded-md"
          type=""
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default HomeProducts;
