import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import DashboardBuyer from './pages/DashboardBuyer';
import Makanan from './pages/Makanan';
import Minuman from './pages/Minuman';
import Chart from './pages/Chart';
import Invoice from './pages/Invoice';
import HistoricalOrderBuyer from './pages/HistoricalOrderBuyer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path ="/Register" element={<Register/>}/>
        <Route path ="/DashboardBuyer" element={<DashboardBuyer/>}/>
        <Route path ="/Makanan" element={<Makanan/>}/>
        <Route path ="/Minuman" element={<Minuman/>}/>
        <Route path ="/Chart" element={<Chart/>}/>
        <Route path ="/Invoice" element={<Invoice/>}/>
        <Route path ="/OrderHistory" element={<HistoricalOrderBuyer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
