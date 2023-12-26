import { useNavigate } from "react-router-dom";
import TableHistoryOrder from "../components/HistoryOrderBuyer";
import { loadFromLocalStorage } from "../utils/localstorage";

function HistoricalOrderBuyer() {
  const historyInvoice = loadFromLocalStorage("history").data || [];

  const navigate = useNavigate();

  const navigateHome = (e) => {
    e.preventDefault();
    navigate("/dashboardBuyer");
  };

  return (
    <div class="p-5">
      <h1 class="text-5xl font-extrabold dark:text-white">
        <button
          onClick={navigateHome}
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 grid justify-items-start">
          Kembali
        </button>
        Order History
      </h1>
      <TableHistoryOrder historyInvoice={historyInvoice}></TableHistoryOrder>
    </div>
  );
}

export default HistoricalOrderBuyer;
