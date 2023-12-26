import "./App.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/addproduct";
import Home from "./pages/homepage";
import ListUsers from "./pages/listusers";
import OrderHistory from "./pages/orderhistory";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardBuyer from "./pages/DashboardBuyer";
import Chart from "./pages/Chart";
import Invoice from "./pages/Invoice";
import HistoricalOrderBuyer from "./pages/HistoricalOrderBuyer";
import { getAccessToken, getRoleUser } from "./utils/network";
import { ToastContainer } from "react-toastify";

function IsAuthenticate() {
  let auth = getAccessToken();
  let isSeller = getRoleUser();

  if (!auth) {
    //Navigasi ke halaman paling awal
    return <Navigate to="/" />;
  }

  //Seller
  if (auth && isSeller === true) {
    return <Navigate to="/dashboard/seller" />;
  }

  // //Buyer
  // if (auth && !isSeller) {
  //   return <Navigate to="/Makanan" />;
  // }

  return <Outlet />;
}

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
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

          <Route element={<IsAuthenticate />}>
            {/* Buyer */}
            <Route path="/dashboardBuyer" element={<DashboardBuyer />} />
            <Route path="/Chart" element={<Chart />} />
            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/Invoice/:id" element={<Invoice />} />
            <Route path="/OrderHistory" element={<HistoricalOrderBuyer />} />

            {/* Seller */}
            <Route path="/dashboard/seller" element={<Home />} />
            <Route path="/users" element={<ListUsers />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/history" element={<OrderHistory />} />
          </Route>

          {/* Buyer Page */}
          {/* <Route path="/Makanan" element={<Makanan />} />
          <Route path="/Minuman" element={<Minuman />} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/OrderHistory" element={<HistoricalOrderBuyer />} /> */}

          {/* Seller Page */}
          {/* <Route path="/dashboard/seller" element={<Home />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/history" element={<OrderHistory />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
