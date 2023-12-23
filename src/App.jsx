import './App.css';
import AddProduct from './pages/addproduct';
import Home from './pages/homepage';
import ListUsers from './pages/listusers';
import OrderHistory from './pages/orderhistory';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
        <Toaster 
         position="bottom-right"
         reverseOrder={false}
         />
    <Routes>   
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<ListUsers />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/history" element={<OrderHistory />} />    
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
