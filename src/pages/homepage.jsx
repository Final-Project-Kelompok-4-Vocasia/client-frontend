import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Menu from "../components/Menu";
import EditForm from "../components/EditForm";
import Sidebar from "../components/Sidebar";
import { getMenu, handleDeleteMenu } from "../utils/local";
import AlertModal from "../components/Alerts";
import Header from "../components/Header";

function Home() {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = getMenu();
    setMenu(data);
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

  
  const onDeleteHandler = (menuId) => {
    handleDeleteMenu(menuId);
    setMenu(getMenu());
    // setIsModalOpen(true);
  };
    
  const openFormEdit = () => {
    setIsFormEdit(true);
  };

  const closeFormEdit = () => {
    setIsFormEdit(false);
  };

  const filteredMenu = menu.filter((item) => {
    const inputTextSearch = search.toLowerCase();
    const searchMenu = item.namaMenu.toLowerCase().includes(inputTextSearch) || item.kategori.toLowerCase().includes(inputTextSearch);

    return searchMenu;
  });

  return (
    <div>
      <Header />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="container justify-center mx-5 pl-14 pr-14 py-10 bg-grey-100">
          <h1 className="text-2xl font-semibold text-left">Dashboard</h1>
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
          </form>

          <div className="relative overflow-x-auto pt-10 w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50 dark:text-gray-50">
              <thead className="text-xs text-stone-900 bg-orange-400 dark:bg-stone-400 dark:text-stone-900">
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
                {filteredMenu.map((item, id) => (
                  <Menu
                    key={id}
                    id={item.id}
                    menu={item.namaMenu}
                    category={item.kategori}
                    price={item.harga}
                    img={item.image}
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

        {isFormEdit && <EditForm onClose={closeFormEdit} />}
        {isModalOpen && <AlertModal isOpen={openModal} onCancel={handleCancel} onDelete={onDeleteHandler} />}
      </div>
    </div>
  );
}

export default Home;
