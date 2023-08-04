import React from "react";
import girl from "../../images/pretty-woman.jpg";
import Product from "./Product";
import useProducts from "./../../Hooks/useProducts";

function Products({
  addToCard,
  cart,
  onRemoveItem,
  onRemoveCart,
  itemsPrice,
  check,
  setCheck,
}) {
  const [products] = useProducts([]);

  var sectionStyle = {
    width: "100%",
    height: "350px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#110d0a",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div
        className="flex flex-col md:flex-row justify-end md:h[600px] w-full"
        style={sectionStyle}
      >
        <div className="md:w-1/2 hidden lg:block">
          <div className="md:py-14 px-10 w-full">
            <h4 className="text-3xl font-bold text-pink-400">
              Trendy Collection
            </h4>
            <h1 className="md:text-5xl text-3xl font-[700] text-white ">
              Shop for
            </h1>
            <h1 className="md:text-5xl text-3xl font-[700] text-white ">
              what you want
            </h1>
            <p className="md:py-6 py-3 text-white text-md text-justify">
              Veniam id laboris ex amet ad est excepteur. Proident et veniam
              deserunt non elit. Laborum eiusmod cillum mollit laborum fugiat.
            </p>
          </div>
        </div>
        <img className="md:w-1/2 md:px-28 h-80" src={girl} alt="" />
      </div>
      <h1 className="text-center md:text-4xl text-2xl font-bold md:pt-10 pt-4">
        Our Products
      </h1>
      <div className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 py-4 mx-auto">
          <div className="grid md:grid-cols-4 md:gap-4 md:-m-4">
            {products.map((product) => (
              <Product
                product={product}
                addToCard={addToCard}
                key={product._id}
                cart={cart}
                onRemoveItem={onRemoveItem}
                onRemoveCart={onRemoveCart}
                itemsPrice={itemsPrice}
                check={check}
                setCheck={setCheck}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
