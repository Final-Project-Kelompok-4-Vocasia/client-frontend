import { useNavigate } from "react-router";

function Register () {

    const navigate= useNavigate();

    const navigateDashboardBuyer = (e) => {
      e.preventDefault();
      navigate('/Makanan');
    };

    return (
        <div className=" my-16 flex items-center justify-center">
        <form className="max-w-screen-lg w-6/12  rounded-lg border-solid border-4 border-orange-900 m-8 p-10">
          <div className="mb-6">
            <h1 className="mb-4 font-bold text-3xl">Register</h1>
            <label className="flex items-center text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label for="username" className="flex items-center text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input 
            type="text" 
            id="username" 
            class="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
          </div>
          <div className="mb-6">
            <label for="telepon" className="flex items-center text-sm font-medium text-gray-900 dark:text-white">No.Telp</label>
            <input 
            type="tel" 
            id="telepon" 
            class="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
          </div>
          <div className="mb-6">
            <label for="address" className="flex items-center text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
            <input 
            type="text" 
            id="address" 
            class="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
          </div>
          <button
            type="submit"
            className="bg-orange-900 text-white hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"

            onClick={navigateDashboardBuyer}
          >
            Submit
          </button>
        </form>
      </div>
    );
} 

export default Register;