import React, { useEffect, useState } from "react";

function TableInvoice({ orderedMenus, id }) {
  const [totalHarga, settotalHarga] = useState(0);
  let invoiceIndb;
  useEffect(() => {
    if (typeof orderedMenus === "function") {
      const fetchData = () => {
        invoiceIndb = orderedMenus(id);
      };
      fetchData();
      settotalHarga(invoiceIndb.totalHarga);
    }
  }, [totalHarga, invoiceIndb]);

  const data_order = orderedMenus.data_order || orderedMenus(id)?.OrderMenus || invoiceIndb.OrderMenus;

  // Pengecekan jika orderedMenus kosong atau undefined
  if (data_order.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
      <table className="max-w-full w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          {data_order?.map((order, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{order.namaMenu || order.Menu.namaMenu}</td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{order.qty || order.quantity}</td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{order.Menu?.harga || order.harga}</td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{order.Menu ? order.harga : order.qty * order.harga}</td>
            </tr>
          ))}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white"></td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white"></td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Total</td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Rp.{orderedMenus.total_order || totalHarga}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableInvoice;
