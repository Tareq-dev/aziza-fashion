import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://aziza-fashion-world.onrender.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [products.id]);

    return [products, setProducts];
};
export default useProducts;