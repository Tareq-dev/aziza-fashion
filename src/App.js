import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProducts from './Pages/Products/SingleProducts';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { useRef, useState } from 'react';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import CustomLogin from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ShippingDetailsPreview from './components/ShippingDetailsPreview/ShippingDetailsPreview';
import ThanksMsg from './components/ThanksMsg/ThanksMsg';
import MyOrder from './components/MyOrder/MyOrder';
import Dashboard from './Pages/Admin/Dashboard';
import AddProduct from './Pages/Admin/AddProduct';
import ManageProduct from './Pages/Admin/ManageProduct';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import PendingOrder from './Pages/Admin/PendingOrder';
import DeliveredOrder from './Pages/Admin/DeliveredOrder';
import AllCustomers from './Pages/Admin/AllCustomers';
import AllAdmins from './Pages/Admin/AllAdmins';
import ManageReview from './Pages/Admin/ManageReview';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';
import ResetPassword from './Pages/Login/ResetPassword';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './firebase.auth';
import RequireAdmin from './Pages/Login/RequireAdmin';


function App() {

  const [cart, setCart] = useState([]);
  const emailRef = useRef();
  const fullNameRef = useRef();
  const nickNameRef = useRef();
  const adressRef = useRef();
  const cityRef = useRef();
  const postRef = useRef();
  const houseNameRef = useRef();
  const phoneNoRef = useRef();
  const extPhoneRef = useRef();
  const rocketPaymentNoRef = useRef();
  const rocketTrxIdRef = useRef();
  const payment = false;

  const data = {
    emailRef, fullNameRef, nickNameRef, adressRef, cityRef, postRef, houseNameRef, phoneNoRef, extPhoneRef, rocketPaymentNoRef, rocketTrxIdRef, payment
  }
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);


  // Add to cart logic

  const addToCard = (product) => {
    const exist = cart.find((x) => x._id === product._id);


    // const unique = newCart.filter((value, index) => {
    //   return newCart.indexOf(value) === index
    // })

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



  // Remove item from cart logic
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

  // Remove cart logic
  const onRemoveCart = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist) {
      setCart(cart.filter((x) => x._id !== product._id));
    } else {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  // Subtotal of cart

  const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);
  const itemsQty = cart.reduce((a, c) => a + c.quantity, 0)


  //Shipment done or not
  const shipmentData = {
  };
  const shipment = (product) => {
    const id = product._id;
    console.log(id)
    fetch(`https://aziza-fashion-world.onrender.com/shipment/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(shipmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data?.modifiedCount === 1) {
        //   navigate("/confirmation")
        // }

      });
  }

//cart check or not check

const [check, setCheck] = useState(false)


  return (
    <div className='font-serif'>
      <Navbar cart={cart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products addToCard={addToCard} cart={cart} onRemoveItem={onRemoveItem} onRemoveCart={onRemoveCart} itemsPrice={itemsPrice} check={check} setCheck={setCheck} />} />
        <Route path='/singleProduct/:id' element={<SingleProducts addToCard={addToCard} />} />
        <Route path='/cart' element={<Cart cart={cart} addToCard={addToCard} onRemoveItem={onRemoveItem} onRemoveCart={onRemoveCart} itemsPrice={itemsPrice} check={check} setCheck={setCheck} />} />
        <Route path='/checkout'
          element={
            <RequireAuth> <CheckOut itemsPrice={itemsPrice} data={data} cart={cart} itemsQty={itemsQty} /></RequireAuth>
          } />
        <Route path='/preview'
          element={
            <RequireAuth> <ShippingDetailsPreview cart={cart} /></RequireAuth>
          } />
        <Route path='/myorder'
          element={
            <RequireAuth> <MyOrder /></RequireAuth>
          } />
        <Route path='/confirmation'
          element={
            <RequireAuth> <ThanksMsg /></RequireAuth>
          } />
        <Route path='/dashboad' element={
          <RequireAdmin> <Dashboard /></RequireAdmin>
        }>
          <Route index element={<AdminDashboard />}></Route>
          <Route path='add-product' element={<AddProduct />}></Route>
          <Route path='manage-product' element={<ManageProduct />}></Route>
          <Route path='pending-order' element={<PendingOrder shipment={shipment} />}></Route>
          <Route path='delivered-order' element={<DeliveredOrder shipment={shipment} />}></Route>
          <Route path='customers' element={<AllCustomers />}></Route>
          <Route path='admin' element={<AllAdmins />}></Route>
          <Route path='review' element={<ManageReview />}></Route>

        </Route>

        <Route path='/login' element={<CustomLogin signInWithGoogle={signInWithGoogle} guser={guser} gloading={gloading} gerror={gerror} />} />
        <Route path='/register' element={<Register signInWithGoogle={signInWithGoogle} guser={guser} gloading={gloading} gerror={gerror} />} />
        <Route path='/reset' element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>


  );
}

export default App;
