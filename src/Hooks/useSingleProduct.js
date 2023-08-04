import { useEffect, useState } from "react";

const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/api/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  return [product, setProduct];
};

export default useSingleProduct;
