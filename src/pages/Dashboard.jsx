import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/bg-img.jpg";

function HomePage() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-start bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}>
      <div className="ml-24">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4 bg-slate-700 px-4 py-1">Welcome to CafféOnline!</h1>
          <p className="text-left text-lg text-white mb-8 max-w-md">
            Di sini, kamu bisa pesan berbagai macam minuman dan makanan favoritmu. Cukup pesan dari mana saja, datang ke kafe, dan tampilkan bukti
            pesananmu. Tanpa mengantri, pesananmu siap diambil. Mudah, cepat, dan sesuai selera. Selamat menikmati pesananmu!
          </p>
        </div>

        <div className="ml-4 flex space-x-4">
          <Link
            to="/login"
            className="bg-amber-600 hover:bg-amber-900 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:shadow-outline">
            Login
          </Link>
          <Link
            to="/register"
            className="hover:bg-slate-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:shadow-outline border-2 border-white">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
