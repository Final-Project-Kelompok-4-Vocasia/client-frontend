import { Link, useNavigate } from "react-router-dom";
import { deleteAccessToken, deleteRoleUser } from "../utils/network";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    deleteAccessToken();
    deleteRoleUser();

    toast.success("Berhasil logout!");
    navigate("/");
  };

  return (
    <ul className=" flex flex-wrap justify-between text-sm font-medium text-center text-orange-800 border-b border-orange-800 dark:border-orange-800 dark:text-orange-800 ">
      <h1 className="flex items-center text-4xl font-extrabold dark:text-white px-5">Caffe Web</h1>
      <div className="flex">
        <li className="me-2">
          <Link
            to="/dashboardBuyer"
            className="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">
            Menu
          </Link>
        </li>
        <li className="me-2">
          <Link
            to="/order-history"
            aria-current="page"
            className="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">
            History Order
          </Link>
        </li>
        <li className="me-2">
          <Link to="/chart" className="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">
            Chart
          </Link>
        </li>
        <li className="me-2">
          <Link
            onClick={handleLogout}
            className="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">
            Logout
          </Link>
        </li>
      </div>
    </ul>
  );
}

export default Navbar;
