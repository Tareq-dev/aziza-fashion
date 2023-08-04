import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleProducts({ addToCard }) {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:5000/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.result));
  }, []);

  return (
    <div className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
          <img
            alt="ecommerce"
            className="md:w-1/2 w-full md:h-[400px] object-contain rounded"
            src={product?.picture}
          />
          <div className="lg:w-1/2 w-full lg:px-10 mt-6 lg:mt-0 py-20">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              Brand : {product?.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {" "}
              {product.name}
            </h1>
            <p className="text-pink-500 font-bold">{product?.rating} Review</p>
            <p className="leading-relaxed text-justify py-2">
              {product?.description}
            </p>

            <div className="flex py-10">
              <span className="title-font font-medium text-2xl text-gray-900">
                {product?.price} TK
              </span>
              <button
                onClick={() => addToCard(product)}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProducts;
