import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Chart from "./pages/Chart";
import Invoice from "./pages/Invoice";
import DashboardBuyer from "./pages/dasboardBuyer";
import HistoricalOrderBuyer from "./pages/HistoricalOrderBuyer";
import { getAccessToken, getRoleUser } from "./utils/network"; // Sesuaikan jalur ini dengan struktur proyek Anda

// eslint-disable-next-line
function IsAuthenticate() {
  let auth = getAccessToken();
  let isSeller = getRoleUser();

  if (!auth) {
    return <Navigate to="/" />;
  }

  //Seller
  if (auth && isSeller) {
    return <Navigate to="/dashboard/seller" />;
  }

  //Buyer
  if (auth && !isSeller) {
    return <Navigate to="/Makanan" />;
  }

  return <Outlet />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Universal Page */}
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/dashboardBuyer" element={<DashboardBuyer />} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Invoice/:id" element={<Invoice />} />
          <Route path="/OrderHistory" element={<HistoricalOrderBuyer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
