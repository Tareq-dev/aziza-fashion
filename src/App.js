import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProducts from './Pages/Products/SingleProducts';
import {  Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
function App() {
  return (

      <div>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/singleProduct/:id' element={<SingleProducts />} />
      </Routes>
      </div>



   
  );
}

export default App;
