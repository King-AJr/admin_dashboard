import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Routes, Route }  from "react-router-dom"

import Dashboard from "./pages/Dashboard";
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import CategoriesPage from './pages/Categories';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/add_product" element={<AddProduct/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/orders" element={<Orders/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
