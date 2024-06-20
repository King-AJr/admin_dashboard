import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';
import Orders from './pages/Orders';
import AddProductForm from './pages/AddProductForm';
import Categories from './pages/Categories';
import DashBoard from './pages/Dashboard';
import LoginPage from './pages/Login';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import Brands from './pages/Brands';
import { DataProvider } from './context/DataProvider';
import OrderScheduler from './web_worker/OrderScheduler';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <DataProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute element={DashBoard} />} />
            <Route path="/products" element={<ProtectedRoute element={ProductList} />} />
            <Route path="/add_product" element={<ProtectedRoute element={AddProductForm} />} />
            <Route path="/categories" element={<ProtectedRoute element={Categories} />} />
            <Route path="/orders" element={<ProtectedRoute element={Orders} />} />
            <Route path="/brands" element={<ProtectedRoute element={Brands} />} />
          </Routes>
        </Router>
        <OrderScheduler/>
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
