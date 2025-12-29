import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import SingleProducts from "./Pages/Products/SingleProducts";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useRef, useState } from "react";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import CustomLogin from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import ShippingDetailsPreview from "./components/ShippingDetailsPreview/ShippingDetailsPreview";
import ThanksMsg from "./components/ThanksMsg/ThanksMsg";
import MyOrder from "./components/MyOrder/MyOrder";
import Dashboard from "./Pages/Admin/Dashboard";
import AddProduct from "./Pages/Admin/AddProduct";
import ManageProduct from "./Pages/Admin/ManageProduct";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import PendingOrder from "./Pages/Admin/PendingOrder";
import DeliveredOrder from "./Pages/Admin/DeliveredOrder";
import AllCustomers from "./Pages/Admin/AllCustomers";
import AllAdmins from "./Pages/Admin/AllAdmins";
import ManageReview from "./Pages/Admin/ManageReview";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import ResetPassword from "./Pages/Login/ResetPassword";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./firebase.auth";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Contact from "./Pages/Contact/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCard = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove single item
  const onRemoveItem = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x._id !== product._id));
    } else {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);
  const itemsQty = cart.reduce((a, c) => a + c.quantity, 0);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="font-serif">
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Home addToCard={addToCard} cart={cart} onRemoveItem={onRemoveItem} itemsPrice={itemsPrice} />}
        />
        <Route
          path="/products"
          element={<Products addToCard={addToCard} cart={cart} onRemoveItem={onRemoveItem} itemsPrice={itemsPrice} />}
        />
        <Route path="/singleProduct/:id" element={<SingleProducts addToCard={addToCard} />} />
        <Route path="/cart" element={<Cart cart={cart} addToCard={addToCard} onRemoveItem={onRemoveItem} itemsPrice={itemsPrice} />} />
        <Route path="/checkout" element={<RequireAuth><CheckOut itemsPrice={itemsPrice} cart={cart} itemsQty={itemsQty} /></RequireAuth>} />
        <Route path="/preview" element={<RequireAuth><ShippingDetailsPreview cart={cart} /></RequireAuth>} />
        <Route path="/myorder" element={<RequireAuth><MyOrder /></RequireAuth>} />
        <Route path="/confirmation" element={<RequireAuth><ThanksMsg /></RequireAuth>} />
        <Route path="/dashboad" element={<RequireAdmin><Dashboard /></RequireAdmin>}>
          <Route index element={<AdminDashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="pending-order" element={<PendingOrder />} />
          <Route path="delivered-order" element={<DeliveredOrder />} />
          <Route path="customers" element={<AllCustomers />} />
          <Route path="admin" element={<AllAdmins />} />
          <Route path="review" element={<ManageReview />} />
        </Route>
        <Route path="/login" element={<CustomLogin signInWithGoogle={signInWithGoogle} />} />
        <Route path="/register" element={<Register signInWithGoogle={signInWithGoogle} />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
