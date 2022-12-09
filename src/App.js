import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProducts from './Pages/Products/SingleProducts';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import Cart from './components/Cart/Cart';


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



  return (
    <div className='bg-slate-100'>
      <Navbar cart={cart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products addToCard={addToCard} />} />
        <Route path='/singleProduct/:id' element={<SingleProducts addToCard={addToCard} />} />
        <Route path='/cart' element={<Cart cart={cart} addToCard={addToCard} onRemoveItem={onRemoveItem} onRemoveCart={onRemoveCart} />} />
      </Routes>
    </div>




  );
}

export default App;
