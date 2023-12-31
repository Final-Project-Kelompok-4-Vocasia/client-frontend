import { useNavigate } from "react-router-dom";
import TableHistoryOrder from "../components/HistoryOrderBuyer";
import { getHistoryOrderBuyer } from "../utils/network";
import { useEffect, useState } from "react";
// const {data} = await getHistoryOrder()

function HistoricalOrderBuyer() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  const navigateHome = (e) => {
    e.preventDefault();
    navigate("/dashboardBuyer");
  };

  useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await getHistoryOrderBuyer();

      if (error) {
        alert("Error mengambil data dari database!");
        console.log(`Error: ${error}`);
      } else {
        setHistory(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-5 bg-orange-200 container min-h-screen">
      <button
        onClick={navigateHome}
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 grid justify-items-start">
        Kembali
      </button>
      <h1 className="text-5xl font-bold text-teal-700 dark:text-white text-center">Order History</h1>
      <TableHistoryOrder historyInvoice={history}></TableHistoryOrder>
    </div>
  );
}

export default HistoricalOrderBuyer;
