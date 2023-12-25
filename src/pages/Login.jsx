import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { login, putAccessToken, putRoleUser } from "../utils/network";

function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    login({ email, password }).then((response) => {
      console.log("Login response:", response);

      if (!response.error) {
        putAccessToken(response?.data?.token);
        putRoleUser(response?.data?.isSeller);

        console.log("isSeller: " + response?.data?.isSeller);

        //Routing Role untuk Seller dan Buyer
        if (response?.data?.isSeller) {
          alert(`Selamat datang, Seller!`);
          navigate("/dashboard/seller"); //Route testing
        } else {
          alert(`Selamat datang, Buyer!`);
          navigate("/Makanan"); //Route testing
        }
      } else {
        alert("Gagal: Salah Email/Password!");
      }
    });
  }

  function onRegisterHandler(event) {
    event.preventDefault();
    navigate("/register");
  }

    return (
        <div className=" my-16 flex items-center justify-center">
        <form className="max-w-screen-lg w-6/12  rounded-lg border-solid border-4 border-orange-900 m-8 p-10" onSubmit={(event) => {
            console.log("Berhasil disubmit!");
            onSubmitHandler(event);
          }}>
          <div className="mb-6">
            <h1 className="mb-4 font-bold text-3xl">Login</h1>
            <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
            onChange={(event) => {
            console.log(event.target.value);
            const value = event.target.value;
            setEmail(value);
            }}
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
             onChange={(event) => {
              console.log(event.target.value);
              const value = event.target.value;
              setPassword(value);
            }}
              type="password"
              id="password"
              className="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          {email && password ? (
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 rounded-lg">
              Submit
            </button>
          ) : (
            <button type="submit" disabled className="bg-red-300 text-white font-semibold px-3 py-1.5 rounded-lg">
              Submit
            </button>
          )}

          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Belum punya akun?&nbsp;
          <Link to="/Register" onClick={onRegisterHandler} class="font-medium text-blue-600 hover:underline dark:text-blue-500">Register</Link>.
          </p>
        </form>
      </div>
    );
} 

export default Login;