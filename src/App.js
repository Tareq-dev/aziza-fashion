import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProducts from './Pages/Products/SingleProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/singleProduct/:id' element={<SingleProducts />} />
      </Routes>



    </BrowserRouter>
  );
}

export default App;
