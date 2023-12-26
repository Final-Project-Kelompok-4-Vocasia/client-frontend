
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';


function TableHistoryOrder({historyInvoice}){
    // console.log(historyInvoice)

        // const handleToSeeInvoice = (e, id_order) => {
        //     e.preventDefault();
        //     console.log(id_order)
        //     const seeInvoice = localStorage.getItem('history');
        //     if (seeInvoice) {
        //     const history = JSON.parse(seeInvoice);
        //       const order = history.data
        //       if (order) {
        //         console.log("History Invoice berhasil ditampilkan", order.id_order);
        //       } else {
        //         console.log("History Invoice tidak tertampil");
        //       }
        //     } else {
        //       console.log("Histroy Invoice tidak ditemukan di localStorage");
        //     }
        //   };



    return(
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Number Invoice
                </th>
                <th scope="col" class="px-6 py-3">
                    Total Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {historyInvoice.map((item, index)=>(
                 <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {item.createdAt}
                 </th>
                 <td class="px-6 py-4">
                     {item.id}
                 </td>
                 <td class="px-6 py-4">
                 {item.totalHarga}
                 </td>
                 <td class="px-6 py-4">
                 {item.status}
                 </td>
                 <td class="px-6 py-4">
                     {/* <a href="/Invoice" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                     onClick={(e)=>{
                        e.preventDefault()
                        this.
                     }} >See</a> */}
                     <Link to={`/Invoice/${item.id}`}>see</Link>
                     {/* <Button> see </Button> */}
                 </td>
             </tr>
            ))}    
        </tbody>
    </table>
</div>  
    )
}
export default TableHistoryOrder;