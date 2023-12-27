import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import TableInvoice from "../components/TableInvoice";
import { loadFromLocalStorage } from "../utils/localstorage";
import { useParams } from "react-router";
import { getHistoryOrderBuyer } from "../utils/network";
import { Label } from "flowbite-react";

function Invoice() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const orderedMenus = loadFromLocalStorage("invoice");
  localStorage.removeItem("menus");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHistoryOrderBuyer();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const historyOrder = (id) => {
    if (!data) return null;
    const invoiceDetail = data.filter((item) => item.id == id);
    return invoiceDetail[0];
  };

  const historyOrderFromDb = historyOrder(id);

  const tanggal_updated = new Date();

  const updatedYear = tanggal_updated.getFullYear();
  const updatedMonth = String(tanggal_updated.getMonth() + 1).padStart(2, "0");
  const updatedDay = String(tanggal_updated.getDate()).padStart(2, "0");
  const formattedUpdatedDate = `${updatedDay}/${updatedMonth}/${updatedYear}`;

  return (
    <div className="min-h-screen border-solid border-2 border-sky-500 text-center bg-orange-200">
      <h1 className="text-5xl font-extrabold dark:text-white p-10">
        <BackButton id={id}></BackButton>
        <h2 className="ms-2 font-semibold text-gray-700 dark:text-gray-400">Detail Pesanan Anda</h2>
      </h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <h3 className="mb-4">Tanggal Order: {id ? historyOrderFromDb?.createdAt : formattedUpdatedDate}</h3>
          <TableInvoice orderedMenus={id ? historyOrder : orderedMenus} id={id}></TableInvoice>
        </>
      )}
    </div>
  );
}

export default Invoice;
