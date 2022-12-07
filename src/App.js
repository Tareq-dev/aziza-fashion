import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProducts from './Pages/Products/SingleProducts';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';


function App() {

  const [cart, setCart] = useState([])
  const addToCard = (product) => {
    const newCart = [...cart,product]
    setCart(newCart)
    }


    return (
      <div>
        <Navbar cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products addToCard={addToCard} />} />
          <Route path='/singleProduct/:id' element={<SingleProducts />} />
        </Routes>
      </div>




    );
  }

  export default App;
