// DashboardBuyer.js

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { menu } from "../utils/local";
import Card from "../components/Card";
import { saveToLocalStorage, loadFromLocalStorage} from "../utils/localstorage";
import { getMenu } from "../utils/api";


function DashboardBuyer() {
  const [order, setOrder] = useState({});
  // const [orderAPI, setOrderAPI] = useState([]);

  useEffect(() => {
    setOrder(loadFromLocalStorage("menus") || {});
    // // setOrderAPI(loadFromLocalStorage("menusAPI") || []);
    const fetchData = async()=> {
      const {error,data} =await getMenu();

      if (error) {
        alert("Error mengambil data dari database!");
        console.log(`Error: ${error}`);
      } else {
        // setOrderAPI(data);
       console.log(data);

      }   
    };

    fetchData()
  }, []);

 const handleOrder = (namaMenu)=>{
    if (!order[namaMenu]) {
      // eslint-disable-next-line no-template-curly-in-string
      order[namaMenu] = 1
      console.log("if")
    }else{
      order[namaMenu] += 1
      console.log("else")
    }
  saveToLocalStorage(order);
 }

//  const handleOrderAPI = (namaMenu)=>{
//   if (!orderAPI[namaMenu]) {
//     // eslint-disable-next-line no-template-curly-in-string
//     orderAPI[namaMenu] = 1
//     console.log("ifAPI")
//   }else{
//     orderAPI[namaMenu] += 1
//     console.log("elseAPI")
//   }
// // saveToLocalStorage(orderAPI);
// }
 

  return (
    <div>
      <Navbar />
      <h1 className="mt-4 mb-2 text-3xl font-bold text-orange-800 ">Makanan</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {menu
          .filter((item) => item.kategori === "makanan")
          .map((menuData) => (
            <Card menuData={menuData} onClickItem={handleOrder}></Card>
          ))}
      </div>

      {/* <h1 className="mt-4 mb-2 text-3xl font-bold text-orange-800 ">Makanan dari hit api</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {orderAPI
          .filter((item) => item.kategori === "makanan")
          .map((menuData) => (
            <Card menuData={menuData} onClickItem={handleOrderAPI}></Card>
          ))}
      </div> */}


      <h1 className="mt-2 mb-2 text-3xl font-bold text-orange-800">Minuman</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {menu
          .filter((item) => item.kategori === "minuman")
          .map((menuData) => (
            <Card menuData={menuData} onClickItem={handleOrder}></Card>
          ))}
      </div>

      {/* <h1 className="mt-2 mb-2 text-3xl font-bold text-orange-800">Minuman dari hit api</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {orderAPI
          .filter((item) => item.kategori === "minuman")
          .map((menuData) => (
            <Card menuData={menuData} onClickItem={handleOrderAPI}></Card>
          ))}
      </div> */}

    </div>
  );
}

export default DashboardBuyer;
