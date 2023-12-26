import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TableChart from "../components/TableChart";
import {
  loadSelectedMenusFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localstorage";

import Button from "../components/Button";
import { addOrder } from "../utils/api";
function Chart() {

  async function onSubmitHandler(event) {
    event.preventDefault();
    const addedOrder = await addOrder();
    console.log(addedOrder);

    if (addedOrder) {
      console.log("Berhasil menambahkan catatan baru!");
    } else {
      console.log(`Error: ${addOrder.error}`);
    }
  }

  const [selectedMenus, setSelectedMenus] = useState(loadSelectedMenusFromLocalStorage());
  // Fungsi untuk menghapus item dari selectedMenus
  const handleRemoveItem = (nama) => {
    delete selectedMenus[nama]
    saveToLocalStorage(selectedMenus)
    setSelectedMenus(loadSelectedMenusFromLocalStorage());
  };

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <TableChart selectedMenus={selectedMenus} onRemoveItem={handleRemoveItem}/>
        <div class="grid justify-items-center p-5">
        <Button>Order</Button>
        </div>
      </div>
    </div>
  );
}

export default Chart;
