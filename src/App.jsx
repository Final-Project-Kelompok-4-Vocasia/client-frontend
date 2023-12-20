import './App.css';
import Home from './pages/homepage';
import OrderHistory from './pages/orderhistory';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>   
      <Route path="/home" element={<Home />} />
      <Route path="/history" element={<OrderHistory />} />    
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
