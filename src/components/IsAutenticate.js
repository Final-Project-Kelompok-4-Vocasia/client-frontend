// File: components/IsAuthenticate.js

import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { getAccessToken, getRoleUser } from "../utils/network";
import Chart from "../pages/Chart";
// import DashboardBuyer from "..DashboardBuyer";
// import Dashboard from "../pages/Dashboard";
import ListUsers from "../pages/ListUsers";
import AddMenuItem from "../pages/AddMenuItem";
import OrderHistory from "../pages/OrderHistory";
import Invoice from "../pages/Invoice";
import HistoricalOrderBuyer from "../pages/HistoricalOrderBuyer";
import DashboardSeller from "../pages/DashboardSeller";
import DashboardBuyer from "../pages/DashboardBuyer";

function IsAuthenticate() {
  const auth = getAccessToken();
  const isSeller = getRoleUser();

  if (!auth) {
    return <Navigate to="/" />;
  } else if (auth && isSeller === "true") {
    return (
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/dashboard/seller" element={<DashboardSeller />} />
        <Route path="/view-users" element={<ListUsers />} />
        <Route path="/add-menu" element={<AddMenuItem />} />
        <Route path="/history" element={<OrderHistory />} />
      </Routes>
    );
  } else if (auth && isSeller === "false") {
    return (
      <Routes>
        <Route path="/dashboardBuyer" element={<DashboardBuyer />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/invoice/:id" element={<Invoice />} />
        <Route path="/order-history" element={<HistoricalOrderBuyer />} />
      </Routes>
    );
  }

  return <Outlet />;
}

export default IsAuthenticate;
