import { Link } from "react-router-dom";

function Navbar () {

    return (
    
<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="me-2">
        <Link to="/" aria-current="page" class="inline-block p-4 rounded-t-lg hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">History Order</Link>
    </li>
    <li class="me-2">
        <Link to="/Makanan" class="inline-block p-4 rounded-t-lg hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Makanan</Link>
    </li>
    <li class="me-2">
        <Link to="/Minuman" class="inline-block p-4 rounded-t-lg hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Minuman</Link>
    </li>
    <li class="me-2">
        <Link to="/Chart" class="inline-block p-4 rounded-t-lg hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Chart</Link>
    </li>
    <li class="me-2">
        <Link to="/Logout" class="inline-block p-4 rounded-t-lg hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Logout</Link>
    </li>
</ul>
    );
}

export default Navbar;