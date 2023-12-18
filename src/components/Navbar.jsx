import { Link } from "react-router-dom";

function Navbar () {

    return (
    
<ul class=" flex flex-wrap text-sm font-medium text-center text-orange-800 border-b border-orange-800 dark:border-orange-800 dark:text-orange-800 ">
<h1 class="flex items-center inline-block text-4xl font-extrabold dark:text-white px-5">Flowbite</h1>
    <li class="me-2">
        <Link to="/OrderHistory" aria-current="page" class="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">History Order</Link>
    </li>
    <li class="me-2">
        <Link to="/Makanan" class="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">Makanan</Link>
    </li>
    <li class="me-2">
        <Link to="/Minuman" class="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">Minuman</Link>
    </li>
    <li class="me-2">
        <Link to="/Chart" class="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">Chart</Link>
    </li>
    <li class="me-2">
        <Link to="/Logout" class="inline-block p-4 hover:text-white hover:bg-orange-800 dark:hover:bg-orange-800 dark:hover:text-orange-300">Logout</Link>
    </li>
</ul>
    );
}

export default Navbar;