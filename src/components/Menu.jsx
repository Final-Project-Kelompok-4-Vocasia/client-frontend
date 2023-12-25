import React from "react";

function Menu(props) {
  const { id, namaMenu, kategori, harga, image, editbutton, deletebutton, onDelete, onEdit } = props;

  return (
    <tr className="bg-stone-300 dark:bg-stone-300 border-y-2">
      <th scope="row" class="px-6 py-4 border-r-2 font-normal text-stone-900 whitespace-nowrap dark:text-black text-center">
        {namaMenu}
      </th>
      <td className="px-6 py-4 border-r-2 text-stone-900 text-center">{kategori}</td>
      <td className="px-6 py-4 border-r-2 text-stone-900 text-center">{harga}</td>
      <td className="px-6 py-4 border-r-2 text-stone-900">
        <img src={image} alt="gambar" style={{ maxWidth: "150px", maxHeight: "150px" }} />
        {}
      </td>
      <td className="px-6 py-4 flex justify-center">
        <button className="font-medium text-blue-600 items-center dark:text-stone-900 hover:underline mx-2" onClick={() => onEdit(id)}>
          {editbutton}
        </button>
        <button className="font-medium text-blue-600 items-center dark:text-stone-900 hover:underline mx-2" onClick={() => onDelete(id)}>
          {deletebutton}
        </button>
      </td>
    </tr>
  );
}

export default Menu;