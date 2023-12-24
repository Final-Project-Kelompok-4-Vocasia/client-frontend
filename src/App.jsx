import './App.css';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from './pages/addproduct';
import Home from './pages/homepage';
import ListUsers from './pages/listusers';
import OrderHistory from './pages/orderhistory';
import { Toaster } from 'react-hot-toast';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Makanan from "./pages/Makanan";
import Minuman from "./pages/Minuman";
import Chart from "./pages/Chart";
import Invoice from "./pages/Invoice";
import HistoricalOrderBuyer from "./pages/HistoricalOrderBuyer";
import { getAccessToken, getRoleUser } from "./utils/network";
import { ToastContainer } from "react-toastify";

function IsAuthenticate() {
  let auth = getAccessToken();
  let isSeller = getRoleUser();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  //Seller
  if (auth && isSeller) {
    return <Navigate to="/dashboard/seller" />;
  }

  //Buyer
  if (auth && !isSeller) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}

function App() {
  return (
    <div className="App">
      <Toaster 
         position="bottom-right"
         reverseOrder={false}
         />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          {/* Universal Page */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Buyer */}
          <Route path="/Makanan" element={<Makanan />} />
          <Route path="/Minuman" element={<Minuman />} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/OrderHistory" element={<HistoricalOrderBuyer />} />

          {/* Seller */}
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/history" element={<OrderHistory />} />    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
