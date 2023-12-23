import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Sidebar from "../components/Sidebar";
import { getUsers, handleDeleteProduct } from "../utils/local";
import AlertModal from "../components/Alerts";
import Header from "../components/Header";
import Users from "../components/Users";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = getUsers();
    setUsers(data);
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

  // const onDeleteHandler = (menu) => {
  //   handleDeleteProduct(menu);
  //   setProduct(getProduct());
  //   setIsModalOpen(true);
  // };

  const filteredUser = users.filter((user) => {
    const inputTextSearch = search.toLowerCase();
    const searchUsers = user.username.toLowerCase().includes(inputTextSearch) || user.nama.toLowerCase().includes(inputTextSearch);

    return searchUsers;
  });

  return (
    <div>
      <Header />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="container justify-center mx-5 pl-30 pr-14 py-10 bg-grey-100">
          <h1 className="text-2xl font-semibold text-left">List User</h1>
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
                placeholder="Search User..."
              />
            </div>
          </form>

          <div className="relative overflow-x-auto pt-10 w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50 dark:text-gray-50">
              <thead className="text-xs text-stone-900 bg-stone-400 dark:bg-stone-400 dark:text-stone-900">
                <tr>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    E-mail
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    No.Telpon
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Alamat
                  </th>
                  <th scope="col" className="px-6 py-3 border-r text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUser.map((user) => (
                  <Users
                    key={user.username}
                    username={user.username}
                    email={user.email}
                    nama={user.nama}
                    nomertelpon={user.nomertelpon}
                    alamat={user.alamat}
                    deletebutton="Delete"
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && <AlertModal isOpen={openModal} onCancel={handleCancel} />}
      </div>
    </div>
  );
}

export default Home;
