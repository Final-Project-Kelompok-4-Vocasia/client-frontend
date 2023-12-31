import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Menu from "../components/Menu";
import EditForm from "../components/EditForm";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { deleteMenu, getMenu } from "../utils/network";

function DashboardSeller() {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [detail, setDetail] = useState({});

  const onHandleSearch = (event) => {
    setSearch(event.target.value);
  };

  const onHandleEditMenu = (id, updatedData) => {
    //Set data array menu seteah datanya di edit
    setMenu((prevMenus) => prevMenus.map((menu) => (menu.id === id ? { ...menu, ...updatedData } : menu)));
  };

  const onHandleDeleteMenu = async (id) => {
    try {
      const { error } = await deleteMenu(id);

      if (error) {
        alert("Error menghapus menu!");
        console.error("Error menghapus menu:", error.code);
      } else {
        const updatedMenu = await getMenu();

        if (!updatedMenu.error) {
          //Update list menu setelah datanya dihapus
          setMenu(updatedMenu.data.data);
        } else {
          console.log("Error mengupdate menu:", updatedMenu.code);
        }
      }
    } catch (error) {
      console.error("Error menghapus menu:", error);
    }
  };

  useEffect(() => {
    getMenu()
      .then(({ data }) => {
        console.log("Menu dari BE", data.data);
        setMenu(data.data);
        console.log(menu);
      })
      .catch((error) => {
        alert(`Error: ${error.message || "Something went wrong"}`);
      });
  }, []);

  const openFormEdit = (id) => {
    const cek = menu.find((el) => el.id == id);
    setDetail(cek);
    setIsFormEdit(true);
  };

  const closeFormEdit = () => {
    setIsFormEdit(false);
  };

  const filteredMenu = menu?.filter((item) => {
    const inputTextSearch = search.toLowerCase();
    const searchProduct =
      (item.namaMenu && item.namaMenu.toLowerCase().includes(inputTextSearch)) ||
      (item.kategori && item.kategori.toLowerCase().includes(inputTextSearch));

    return searchProduct;
  });

  return (
    <div>
      <Header />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="container justify-center mx-5 pr-14 py-10 bg-grey-100">
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
                className="bg-blue-100 text-stone-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pl-10 dark:border-stone-200 "
                placeholder="Search Menu..."
              />
            </div>
          </form>

          <div className="relative overflow-x-auto pt-10 w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50 dark:text-gray-50 border-2">
              <thead className="text-xs text-stone-900 bg-stone-400 dark:bg-stone-400 dark:text-stone-900">
                <tr>
                  <th scope="col" className="px-6 py-3 border-r-2  text-center">
                    Menu
                  </th>
                  <th scope="col" className="px-6 py-3 border-r-2 text-center">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 border-r-2 text-center">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 border-r-2 text-center">
                    Img
                  </th>
                  <th scope="col" className="px-6 py-3 border-r-2 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredMenu?.map((item, index) => (
                  <Menu
                    key={index}
                    id={item.id}
                    namaMenu={item.namaMenu}
                    kategori={item.kategori}
                    harga={item.harga}
                    image={item.image}
                    editbutton="Edit"
                    deletebutton="Delete"
                    onDelete={onHandleDeleteMenu}
                    onEdit={openFormEdit}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isFormEdit && <EditForm detail={detail} onClose={closeFormEdit} onEdit={onHandleEditMenu} />}
      </div>
    </div>
  );
}

export default DashboardSeller;
