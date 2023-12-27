import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { saveToLocalStorage, loadSelectedMenusFromLocalStorage } from "../utils/localstorage";
import { getMenu } from "../utils/network";

function DashboardBuyer() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMenu();
        console.log("Menu Buyer dari BE", response.data.data);
        setMenu(response.data.data);
      } catch (error) {
        alert(`Error: ${error.message || "Something went wrong"}`);
      }
    };

    fetchData();
  }, []);

  const handleOrder = (id) => {
    let array_chart = loadSelectedMenusFromLocalStorage();
    const menu_pilihan = menu.find((el) => el.id == id);
    if (Array.isArray(array_chart)) {
      const index = array_chart.map((el) => el.id).indexOf(id);
      if (index !== -1) {
        array_chart[index].qty++;
      } else {
        array_chart.push({ ...menu_pilihan, qty: 1 });
      }
    } else {
      array_chart = [{ ...menu_pilihan, qty: 1 }];
    }
    saveToLocalStorage(array_chart);
  };

  console.log(menu);

  return (
    <div>
      <Navbar />
      <h1 className="mt-9 mb-4 text-3xl font-bold text-slate-700 text-center">Makanan</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-8 gap-4">
        {menu
          ?.filter((item) => item.kategori === "makanan")
          ?.map((menuData) => (
            <Card menuData={menuData} onClickItem={handleOrder}></Card>
          ))}
      </div>

      <h1 className="mt-14 mb-4 text-3xl font-bold text-slate-700 text-center">Minuman</h1>
      <div className="flex flex-wrap justify-center space-x-4 mb-8 gap-4">
        {menu
          ?.filter((item) => item.kategori === "minuman")
          ?.map((menuData) => (
            <Card menuData={menuData} onClickItem={handleOrder}></Card>
          ))}
      </div>
    </div>
  );
}

export default DashboardBuyer;
