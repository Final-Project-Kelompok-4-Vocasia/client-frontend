// components/Card.js
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ menuData }) {
  const notify = () => {
    toast.success("Menu berhasil ditambahkan Chart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img className="p-8 rounded-t-lg" src={menuData.gambar} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{menuData.namaMenu}</h5>
        </a>
        <div className="flex items-center justify-between">
          <span className=" p-10 text-m font-bold text-gray-900 dark:text-white">{menuData.harga}</span>
          <div className="flex items-center">
            <button
              onClick={notify}
            //   onSubmit={handleAddToChart}
              type="button" 
              className="flex justify-between bg-orange-900 text-white hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
