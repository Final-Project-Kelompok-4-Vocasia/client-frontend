import { useNavigate } from "react-router-dom";
import { addOrder } from "../utils/network";
import { toast } from "react-hot-toast";

function Button({ invoice }) {
  const navigate = useNavigate();
  const navigateInvoice = async (e) => {
    e.preventDefault();
    navigate("/invoice");
    const data_order = invoice();
    const menus = await data_order.map((menu) => {
      return {
        menuID: menu.id,
        quantity: menu.qty,
      };
    });

    const data = await addOrder({ order: menus });
    const pesan = data.data?.message || data.error;
    toast.success(pesan);
  };
  return (
    <button
      onClick={navigateInvoice}
      type="button"
      className="text-white text-lg bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-6 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Order
    </button>
  );
}

export default Button;
