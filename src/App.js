import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProducts from './Pages/Products/SingleProducts';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { useRef, useState } from 'react';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import CustomLogin from './Pages/Login/CustomLogin';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ShippingDetailsPreview from './components/ShippingDetailsPreview/ShippingDetailsPreview';
import ThanksMsg from './components/ThanksMsg/ThanksMsg';


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
  //bkash



  return (
    <div>
      <Navbar cart={cart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products addToCard={addToCard} />} />
        <Route path='/singleProduct/:id' element={<SingleProducts addToCard={addToCard} />} />
        <Route path='/cart' element={<Cart cart={cart} addToCard={addToCard} onRemoveItem={onRemoveItem} onRemoveCart={onRemoveCart} itemsPrice={itemsPrice} />} />
        <Route path='/checkout'
          element={
            <RequireAuth> <CheckOut itemsPrice={itemsPrice} data={data} cart={cart} itemsQty={itemsQty} /></RequireAuth>
          } />
        <Route path='/preview'
          element={
            <RequireAuth> <ShippingDetailsPreview cart={cart} /></RequireAuth>
          } />
        <Route path='/confirmation'
          element={
            <RequireAuth> <ThanksMsg /></RequireAuth>
          } />
        <Route path='/login' element={<CustomLogin />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>


  );
}

export default App;
