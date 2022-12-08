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
  const addToCard = (product) => {
    const newCart = [...cart, product]
    setCart(newCart);
    // const existingCart = product._id;
    // const addedCart = newCart.map(p => p._id)
    // const filt = addedCart.filter(product._id !== existingCart)
    // console.log(filt)
  }

  return (
    <div className='bg-slate-100'>
      <Navbar cart={cart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products addToCard={addToCard} />} />
        <Route path='/singleProduct/:id' element={<SingleProducts />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
      </Routes>
    </div>




  );
}

export default App;
