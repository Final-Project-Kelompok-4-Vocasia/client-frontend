import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TableChart from "../components/TableChart";
import {
  loadDataLocalStorage,
  loadSelectedMenusFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localstorage";

import Button from "../components/Button";
function Chart() {
  const [selectedMenus, setSelectedMenus] = useState(loadSelectedMenusFromLocalStorage());
  // Fungsi untuk menghapus item dari selectedMenus
  // const handleRemoveItem = (nama) => {
  //   delete selectedMenus[nama];
  //   saveToLocalStorage(selectedMenus);
  //   setSelectedMenus(loadSelectedMenusFromLocalStorage());
  // };

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <TableChart
          selectedMenus={selectedMenus}
          // onRemoveItem={handleRemoveItem}
        />
        <div class="grid justify-items-center p-5">
          <Button evaa={()=>{
            return loadDataLocalStorage("invoice")
          }}>Order</Button>
        </div>
      </div>
    </div>
  );
}

export default Chart;
