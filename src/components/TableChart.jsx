import React, { useState, useEffect } from "react";
import {
  loadSelectedMenusFromLocalStorage,
  saveData,
  saveToLocalStorage,
} from "../utils/localstorage";
// import { menu } from "../utils/local";

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

function TableChart({ selectedMenus}) {
  // console.log(selectedMenu)
  let tempTotal = 0;
  const [selectedMenu, setSelectedmenu] = useState(selectedMenus); // Initialize with 1
  const [total, setTotal] = useState(tempTotal)

 
  const menus = selectedMenu.filter((item) => {
    // let menus;
    selectedMenu.map((el) => el.id).includes(item.id);
    // for (let menu in selectedMenus) {
    //   console.log(menu, "INIMENUT");
    //   if (item.namaMenu === menu) {
    //     item.qty = selectedMenu[menu];
    //     item.subtotal = item.harga * item.qty;
    //     tempTotal += item.subtotal;
    //     menus = item;
    // }
    // }
    // return menus;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const invoice =  {
    id_order: new Date().getTime(),
    create_at: new Date().toLocaleString(),
    OrderMenus: selectedMenu,
    totalHarga: total,
    status_order: true,
  }

  let array_chart = loadSelectedMenusFromLocalStorage() ;
  const handleQuantityChange = (id, value) => {
    const index = array_chart.map((el) => el.id).indexOf(id);
    if (index !== -1) {
      array_chart[index].qty = value;
    }
    // array_chart.map((item)=>)
    saveToLocalStorage(array_chart);
    setSelectedmenu(array_chart);
  };

 
  const a = array_chart.map((item)=> tempTotal += item.harga * item.qty)
  function handleRemoveItem(id) {
    // console.log(id)
    const newarray = array_chart.filter((menus)=> menus.id !== id)
    saveToLocalStorage(newarray)
    setSelectedmenu(newarray)
  }

  // Effect untuk memperbarui subtotal saat quantities berubah
  useEffect(() => {
    setTotal(tempTotal)
    saveData(invoice, "invoice");
  }, [tempTotal, invoice, selectedMenu]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="max-w-full w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead>
          <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Sub Total
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedMenu.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img
                  src={item.image}
                  className="w-16 h-16 max-w-full max-h-full object-center"
                  alt={item.namaMenu}
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {item.namaMenu}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <input
                      type="number"
                      id={`quantity_${index}`}
                      value={item.qty}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {rupiah(item.harga)}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {rupiah(item.qty * item.harga)}
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          {/* Baris untuk menampilkan total */}
          <tr className="text-xs font-semibold text-gray-900 dark:text-white">
            <td colSpan="4" className="px-6 py-3 text-right">
              Total
            </td>
            <td className="px-6 py-3">{rupiah(tempTotal)}</td>
            <td className="px-6 py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableChart;
