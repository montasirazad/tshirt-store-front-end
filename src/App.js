import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './components/AddProducts/AddProducts';
import Admin from './components/Admin/Admin';
import AllProducts from './components/AllProducts/AllProducts';
import BuyItem from './components/BuyItem/BuyItem';
import AuthProvider from './components/Context/AuthProvider';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (

    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/add-products' element={<AddProducts />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/login' element={<Login />} />

        <Route path='/admin' element={<PrivateRoute>
          <Admin />
        </PrivateRoute>} />

        <Route path='/buy-item/:id' element={<PrivateRoute>
          <BuyItem />
        </PrivateRoute>} />

        <Route path='/order' element={<PrivateRoute>
          <Order />
        </PrivateRoute>} />
        <Route path='/update-product/:id' element={<PrivateRoute>
          <UpdateProduct />
        </PrivateRoute>} />
      </Routes>
    </AuthProvider>


  );
}

export default App;
