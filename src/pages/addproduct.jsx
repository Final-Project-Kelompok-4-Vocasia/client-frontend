import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import toast from "react-hot-toast";
import { addMenu } from "../utils/network";
import { useNavigate } from "react-router";

function AddMenu() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState({
    namaMenu: "",
    kategori: "",
    harga: "",
    image: "",
  });

  async function onSubmitHandler(event) {
    event.preventDefault();
    const addedNewMenu = await addMenu(menu);
    console.log(addedNewMenu);

    if (addedNewMenu) {
      toast.success("Data added successfully!");
      //Navigasi ke dashboard setelah menambahkan menu
      navigate("/dashboard/seller");
    } else {
      toast.error("Failed to add menu!");
      console.log(`Error: ${addedNewMenu.error}`);
    }
  }

  return (
    <div>
      <Header />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="container ml-30 w-full h-full justify-center mx-20 pl-14 pr-14 py-10 bg-grey-100">
          <h1 className="text-2xl text-center font-semibold">Add Menu</h1>
          <form onSubmit={onSubmitHandler} className="max-w-lg mx-auto">
            <div className="pt-5 mb-5">
              <label htmlFor="menu" className="mb-2 block text-base font-medium text-[#07074D]">
                Menu
              </label>
              <input
                type="text"
                name="menu"
                id="menu"
                placeholder="Menu Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={menu.namaMenu}
                onChange={(e) => setMenu({ ...menu, namaMenu: e.target.value })}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="category" className="mb-3 block text-base font-medium text-[#07074D]">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={menu.kategori}
                onChange={(e) => setMenu({ ...menu, kategori: e.target.value })}>
                <option value="" disabled defaultValue>
                  Select a Category
                </option>
                <option value="Minuman">Minuman</option>
                <option value="Makanan">Makanan</option>
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D]">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Enter Price (Rp.)"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={menu.harga}
                onChange={(e) => setMenu({ ...menu, harga: e.target.value })}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="imgURL" className="mb-3 block text-base font-medium text-[#07074D]">
                Img URL
              </label>
              <input
                type="text"
                name="imgURL"
                id="imgURL"
                placeholder="Enter Img URL"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={menu.image}
                onChange={(e) => setMenu({ ...menu, image: e.target.value })}
              />
            </div>
            <div></div>
            <button
              type="submit"
              className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              onClick={onSubmitHandler}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMenu;
