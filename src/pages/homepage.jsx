import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Menu from '../components/Menu';
import AddForm from '../components/AddForm';
import EditForm from '../components/EditForm';
import Sidebar from '../components/Sidebar';
import { getProduct, handleDeleteProduct } from '../utils/local';
import AlertModal from '../components/Alerts';

function Home() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [isFormAdd, setIsFormAdd] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  useEffect(() => {
    const data = getProduct();
    setProduct(data);
  }, []);

  const onHandleSearch = (event) => {
    setSearch(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDeleteHandler = (menu) => {
    handleDeleteProduct(menu);
    setProduct(getProduct());
    setIsModalOpen(true);
  };

  const openFormAdd = () => {
    setIsFormAdd(true);
  };

  const closeFormAdd = () => {
    setIsFormAdd(false);
  };

  const openFormEdit = () => {
    setIsFormEdit(true);
  };

  const closeFormEdit = () => {
    setIsFormEdit(false);
  };

  const filteredProduct = product.filter((item) => {
    const inputTextSearch = search.toLowerCase();
    const searchProduct =
      item.menu.toLowerCase().includes(inputTextSearch) ||
      item.category.toLowerCase().includes(inputTextSearch);

    return searchProduct;
  });

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow md:pl-60 pr-11 py-28 overflow-x-auto">
        <div className="container mx-auto px-12 pb-12 pt-1 bg-white rounded-lg">
          <h1 className="text-2xl font-semibold text-left mt-12">Dashboard</h1>
          <form className="flex items-center pt-5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch className="h-4 w-4 text-stone-900 dark:text-stone-900" />
              </div>
              <input
                value={search}
                onChange={(event) => {
                  onHandleSearch(event);
                }}
                type="text"
                className="bg-stone-300 text-stone-900 text-sm rounded-lg focus:ring-stone-500 focus:border-stone-500 block w-full p-3 pl-10 dark:border-stone-200 "
                placeholder="Search Product..."
              />
            </div>
            <button
              type="button"
              onClick={openFormAdd}
              className="inline-flex items-center justify-center w-32 py-3 px-3 ms-4 text-sm font-normal text-stone-900 bg-stone-300 rounded-lg border hover:bg-stone-400"
            >
              Add Product
            </button>
          </form>

          <div className="relative overflow-x-auto pt-10 w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50 dark:text-gray-50">
              <thead className="text-xs text-stone-900 bg-stone-400 dark:bg-stone-400 dark:text-stone-900">
                <tr>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Menu
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Img
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProduct.map((item, index) => (
                  <Menu
                    key={index}
                    id={item.id}
                    menu={item.menu}
                    category={item.category}
                    price={item.price}
                    img={item.img}
                    editbutton="Edit"
                    deletebutton="Delete"
                    onDelete={onDeleteHandler} 
                    onEdit={openFormEdit}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isFormAdd && <AddForm onClose={closeFormAdd} />}
      {isFormEdit && <EditForm onClose={closeFormEdit} />}
      {isModalOpen && <AlertModal isOpen={openModal} onCancel={handleCancel} onDelete={onDeleteHandler} />}
    </div>
  );
}

export default Home;