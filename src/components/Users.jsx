import React from 'react';

function Users(props) {
  const { id, username, email, nama, nomertelpon, alamat, deletebutton, onDelete } = props;

  return (
    <tr className="bg-stone-300 dark:bg-stone-300">
      <th scope="row" class="px-6 py-4 border-r font-normal text-stone-900 whitespace-nowrap dark:text-black">
        {username}
      </th>
      <td className="px-6 py-4 border-r text-stone-900">
        {email}
      </td>
      <td className="px-6 py-4 border-r text-stone-900">
        {nama}
      </td>
      <td className="px-6 py-4 border-r text-stone-900">
        {nomertelpon}
      </td>
      <td className="px-6 py-4 border-r text-stone-900">
        {alamat}
      </td>
      <td className="px-6 py-4 flex justify-center">
        <button
          className="font-medium text-blue-600 items-center dark:text-stone-900 hover:underline mx-2"
          onClick={() => onDelete(id)}
        >
          {deletebutton}
        </button>
      </td>
    </tr>
  );
}

export default Users;