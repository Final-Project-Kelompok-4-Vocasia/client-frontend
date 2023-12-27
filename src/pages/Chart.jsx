import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TableChart from "../components/TableChart";
import { loadDataLocalStorage, loadSelectedMenusFromLocalStorage } from "../utils/localstorage";

import Button from "../components/Button";
function Chart() {
  const [selectedMenus, setSelectedMenus] = useState(loadSelectedMenusFromLocalStorage());
  const data_order = () => {
    const menus = loadDataLocalStorage("invoice");
    return menus.data_order;
  };

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <TableChart selectedMenus={selectedMenus} />
        <div class="grid justify-items-center p-5">
          <Button invoice={data_order}>Order</Button>
        </div>
      </div>
    </div>
  );
}

export default Chart;
