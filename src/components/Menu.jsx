import React from 'react';

function Menu(props) {
    const { menu, category, price, img, editbutton, deletebutton, onDelete } = props;

    return (
      <tr className="bg-stone-300 dark:bg-stone-300">
        <th scope="row" class="px-6 py-4 border-r font-normal text-stone-900 whitespace-nowrap dark:text-black">
          {menu}
        </th>
        <td className="px-6 py-4 border-r text-stone-900">
          {category}
        </td>
        <td className="px-6 py-4 border-r text-stone-900">
          {price}
        </td>
        <td className="px-6 py-4 border-r text-stone-900">
          {img}
        </td>
        <td className="px-6 py-4 flex justify-center">
            <button className="font-medium text-blue-600 items-center dark:text-stone-900 hover:underline mx-2"  onClick={props.onEdit}>
                {editbutton}
            </button>
            <button
                className="font-medium text-blue-600 items-center dark:text-stone-900 hover:underline mx-2"
                onClick={() => onDelete(menu)}
              >
                {deletebutton}
        </button>
        </td>
      </tr>
    );
  }

export default Menu;