import React, { useEffect} from "react";
import BackButton from "../components/BackButton";
import TableInvoice from "../components/TableInvoice";
import { loadFromLocalStorage,loadDataLocalStorage } from "../utils/localstorage";
import { useParams } from 'react-router';
import { getHistoryOrder, addOrder } from "../utils/api";
const {data} = await getHistoryOrder()
function historyOrder(id) {
  const invoiceDetail = data.filter((item)=> item.id == id) 
  return invoiceDetail[0]
}

// async function Order() {
  
// }





function Invoice() {
 
  // console.log(id)
  const history = localStorage.getItem("history")
  const  orderedMenus =  loadFromLocalStorage("invoice");


  // console.log("Ordered Menus in Invoice:", orderedMenus);
  localStorage.removeItem("menus")


  const canceledOrder = (orderId) => {
  
    const historyString = localStorage.getItem("history");
    if (historyString) {
      const history = JSON.parse(historyString);
      const orderToCancel = history.data.find((history) => history.id_order);
      if (orderToCancel && orderToCancel.status_order === true) {
        orderToCancel.status_order = false;
        localStorage.setItem('history', JSON.stringify(history));
  
        console.log("status_order terubah menjadi false", history);
      } else {
        console.log("Order tidak ditemukan atau status_order sudah false");
      }
    } else {
      console.log("Data history tidak ditemukan di localStorage");
    }
  };
  

  const { id } = useParams();
  
  // function invoiceDetail(id) {
  //   const historyInvoice = localStorage.getItem("history");
  //   const history = JSON.parse(historyInvoice);
  //   const detailInvoice = history.data.find((history) => history.id_order == id);
  //   return detailInvoice;
  // }

  useEffect(()=>{
  },[history, orderedMenus])

  // const name = "Eva";
  const tanggal_updated = new Date();

  const updatedYear = tanggal_updated.getFullYear();
  const updatedMonth = String(tanggal_updated.getMonth() + 1).padStart(2, '0');
  const updatedDay = String(tanggal_updated.getDate()).padStart(2, '0');
  const formattedUpdatedDate = `${updatedDay}/${updatedMonth}/${updatedYear}`;

  return (
    <div className="border-solid border-2 border-sky-500">
      <h1 className="text-5xl font-extrabold dark:text-white p-10">
        <BackButton id={id}></BackButton>Flowbite
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          This is secondary text
        </small>
      </h1>
      {/* <h3>Name: {name} </h3> */}
      <h3>Tanggal Order: {id ? historyOrder(id).createdAt :formattedUpdatedDate } </h3>

      <TableInvoice orderedMenus={id ? historyOrder(id) : orderedMenus} id={id}></TableInvoice>
 
    </div>
  );
}

export default Invoice;
