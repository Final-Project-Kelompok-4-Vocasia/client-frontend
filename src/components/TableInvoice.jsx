function TableInvoice () {
    return(
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
      <table class="max-w-full w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3">
                    Subtotal
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Apple Watch
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    10
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    2
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    20
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Apple Watch
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    10
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    2
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    20
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Apple Watch
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    10
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    2
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    20
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {/* blank */}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {/* blank */}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Total
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $999
                </td>
            </tr>

        </tbody>
    </table>
</div>

    );
};

export default TableInvoice;