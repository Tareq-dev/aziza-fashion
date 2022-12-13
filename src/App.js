import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProducts from './Pages/Products/SingleProducts';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import {  useState } from 'react';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import CustomLogin from './Pages/Login/CustomLogin';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';


function App() {
 
  const [cart, setCart] = useState([]);



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
            <RequireAuth> <CheckOut itemsPrice={itemsPrice}/></RequireAuth>
          } />
        <Route path='/login' element={<CustomLogin />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>




  );
}

export default App;
