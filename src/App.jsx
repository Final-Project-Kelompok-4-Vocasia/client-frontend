import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import IsAuthenticate from "../src/components/IsAutenticate";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardBuyer from "./pages/DashboardBuyer";
import Chart from "./pages/Chart";
import Invoice from "./pages/Invoice";
import HistoricalOrderBuyer from "./pages/HistoricalOrderBuyer";
import DashboardSeller from "./pages/DashboardSeller";
import ListUsers from "./pages/ListUsers";
import AddMenuItem from "./pages/AddMenuItem";
import OrderHistory from "./pages/OrderHistory";

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
          {/* Univresal Route */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<IsAuthenticate />}>
            {/* Buyer Page */}
            <Route path="/dashboardBuyer" element={<DashboardBuyer />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/order-history" element={<HistoricalOrderBuyer />} />

            {/* Seller Page */}
            <Route path="/dashboard/seller" element={<DashboardSeller />} />
            <Route path="/view-users" element={<ListUsers />} />
            <Route path="/add-menu" element={<AddMenuItem />} />
            <Route path="/history" element={<OrderHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
