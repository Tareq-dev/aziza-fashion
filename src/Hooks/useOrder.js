import { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://aziza-fashion-world.onrender.com/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders.id]);

  return [orders];
};
export default useOrders;
