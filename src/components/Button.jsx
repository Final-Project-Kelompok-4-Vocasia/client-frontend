import { useNavigate } from "react-router-dom";
import { addOrder } from "../utils/api";
// const menus = loadDataLocalStorage("invoice")
  // console.log(menus)

function Button ({invoice}){ 
    const navigate = useNavigate();
    const menus = invoice()

    const navigateInvoice = async(e) => {
        e.preventDefault();
        navigate("/Invoice");
         const order = menus.map((menu)=> {return {
        menuID: menu.id,
        quantity: menu.qty
      }}) 
        const data = await addOrder({"order": order})
        console.log(data.data.message)
    }
    return(
<button onClick={navigateInvoice} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order</button>
    );
} ;

export default Button;