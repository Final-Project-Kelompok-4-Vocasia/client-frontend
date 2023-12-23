import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import toast from "react-hot-toast";
import { addProduct } from "../utils/local";

function AddProduct() {
  const [product, setProduct] = useState({
    menu: "",
    category: "",
    price: "",
    img: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addProduct(product);
    console.log('Data added successfully!');
    toast.success('Data added successfully!');
  };
  
  return (
    <div>
      <Header />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="container justify-center mx-20 pl-14 pr-14 py-10 bg-grey-100">
          <h1 className="text-2xl text-center font-semibold text-left">
            Add Product
          </h1>
          <form onSubmit={onSubmitHandler}>
            <div className="pt-5 mb-5">
              <label
                htmlFor="menu"
                className="mb-2 block text-base font-medium text-[#07074D]"
              >
                Menu
              </label>
              <input
                type="text"
                name="menu"
                id="menu"
                placeholder="Product Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={product.menu}
                onChange={(e) =>
                  setProduct({ ...product, menu: e.target.value })
                }
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="category"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              >
                <option value="" disabled defaultValue>
                  Select a Category
                </option>
                <option value="Minuman">Minuman</option>
                <option value="Makanan">Makanan</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Enter Price (Rp.)"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="imgURL"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Img URL
              </label>
              <input
                type="text"
                name="imgURL"
                id="imgURL"
                placeholder="Enter Img URL"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={product.img}
                onChange={(e) =>
                  setProduct({ ...product, img: e.target.value })
                }
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

export default AddProduct;
