import { Link } from "react-router-dom";

function TableHistoryOrder({ historyInvoice }) {
  //Mengatur format tanggal ordernya dengan waktu lokal
  const formatLocalDate = (dateString, locale) => {
    const createdAt = new Date(dateString);

    return createdAt.toLocaleString(locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs border-2 border-slate-400 text-slate-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Number Invoice
            </th>
            <th scope="col" className="px-6 py-3">
              Total Price
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {historyInvoice?.map((item, index) => (
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                {formatLocalDate(item.createdAt, "id-ID")}
              </th>
              <td className="px-6 py-4 text-gray-600">{item.id}</td>
              <td className="px-6 py-4 text-gray-600">{item.totalHarga}</td>
              <td className="px-6 py-4 text-gray-600">{item.status}</td>
              <td className="px-6 py-4 text-gray-600">
                <Link to={`/invoice/${item.id}`}>
                  <u className="text-blue-500">Detail</u>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableHistoryOrder;
