import React from 'react';
import { AiOutlineClose } from "react-icons/ai";


const EditForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute w-full h-full bg-gray-800 opacity-50"></div>
      <div className="z-10 bg-white p-6 rounded shadow-lg w-6/12 relative">
        <button className="absolute top-0 right-0 m-4 text-black hover:text-gray-800" onClick={onClose}>
        <AiOutlineClose className="h-6 w-6 text-stone-900 dark:text-stone-900" />
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Menu</h2>
        <form onSubmit={handleSubmit}>
        <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-2 block text-base font-medium text-[#07074D]"
        >
          Menu
        </label>
        <input
          type="text"
          name="menu"
          id="menu"
          placeholder="Product Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
      <label htmlFor="category" className="mb-3 block text-base font-medium text-[#07074D]">
      Category
      </label>
      <select
        name="category"
        id="category"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      >
        <option value="" disabled selected>Select a Category</option>
        <option value="minuman">Minuman</option>
        <option value="makanan">Makanan</option>
      </select>
      </div>
      <div class="mb-5">
        <label
          for="subject"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Price
        </label>
        <input
          type="text"
          name="price"
          id="subject"
          placeholder="Enter Price"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          img URL
        </label>
        <input
          type="text"
          name="img URL"
          id="img URL"
          placeholder="Enter img URL"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div>
      </div>
    </form>
          <button
            type="submit"
            className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
