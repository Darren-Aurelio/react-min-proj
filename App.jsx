import React from 'react';
import Header from './components/header';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Login from './pages/login'
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  Outlet
} from 'react-router-dom'
import ProductDetail from './pages/product/detail'
import Product from './pages/product'

const PrivateRoute = () => {
  const auth = sessionStorage.getItem('access_token');

  if (!auth) {

    return <Navigate to="/" />
  }
  return (
    <>
      <Header />


      <Outlet />
    </>
  )

}


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>


          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/" element={<Product />} />


          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route index path="/dashboard" element={<Dashboard />} />

          </Route>

          {/* Not Found */}
          <Route path="*" element={<> Not Found </>} />


        </Routes>
      </BrowserRouter>
    </>)
}

export default App;