import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HistoryOrder from "../components/History Order";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getHistory } from "../utils/local";

function OrderHistory() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedUpdatedDate = `(${year}-${month}-${day})`;

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = getHistory();
    setHistory(data);
  }, []);

  const onHandleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredHistory = history.filter((item) => {
    const inputTextSearch = search.toLowerCase();
    const searchHistory = item.menu.toLowerCase().includes(inputTextSearch) || item.status.toLowerCase().includes(inputTextSearch);

    return searchHistory;
  });

  return (
    <div>
      <Header />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="container justify-center mx-5 pr-14 py-10 bg-grey-100">
          <h1 className="text-2xl font-semibold text-left">Order History</h1>
          <form className="flex items-center pt-5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch className="h-4 w-4 text-stone-900 dark:text-stone-900" />
              </div>
              <input
                value={search}
                onChange={(event) => {
                  onHandleSearch(event);
                }}
                type="text"
                className="bg-stone-300 text-stone-900 text-sm rounded-lg focus:ring-stone-500 focus:border-stone-500 block w-full p-3 pl-10 dark:border-stone-200 "
                placeholder="Search Order..."
              />
            </div>
          </form>

          <div className="relative overflow-x-auto pt-10 w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50 dark:text-gray-50">
              <thead className="text-xs text-stone-900 bg-stone-400 dark:bg-stone-400 dark:text-stone-900">
                <tr>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Created At
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Menu
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory.map((item, index) => (
                  <HistoryOrder
                    key={index}
                    orderId={item.orderId}
                    createdAt={formattedUpdatedDate}
                    menu={item.menu}
                    status={item.status}
                    quantity={item.quantity}
                    price={item.price}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
