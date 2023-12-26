import React from 'react';

function HistoryOrder(props) {
    const { orderId, createdAt, menu, status, quantity, price } = props;
    

    return (
      <tr className="bg-stone-300 dark:bg-stone-300">
        <th scope="row" className="px-6 py-4 border-r font-normal text-center text-stone-900 whitespace-nowrap dark:text-black">
          {orderId}
        </th>
        <td className="px-6 py-4 border-r text-center text-stone-900">
          {createdAt}
        </td>
        <td className="px-6 py-4 border-r text-stone-900">
          {menu}
        </td>
        <td className="px-6 py-4 border-r text-center text-stone-900">
          {status}
        </td>
        <td className="px-6 py-4 border-r text-center text-stone-900">
          {quantity}
        </td>
        <td className="px-6 py-4 border-r text-stone-900">
          {price}
        </td>
      </tr>
    );
}

export default HistoryOrder;
