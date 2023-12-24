
import BackButton from "../components/BackButton";
import TableInvoice from "../components/TableInvoice";

function Invoice (){
    const name = "Eva";
    const tanggal_updated = new Date();

  const updatedYear = tanggal_updated.getFullYear();
  const updatedMonth = String(tanggal_updated.getMonth() + 1).padStart(2, '0');
  const updatedDay = String(tanggal_updated.getDate()).padStart(2, '0');
  const formattedUpdatedDate = `${updatedDay}/${updatedMonth}/${updatedYear}`;

    return (
        <div class = "border-solid border-2 border-sky-500">
            
            <h1 class="text-5xl font-extrabold dark:text-white p-10"><BackButton></BackButton>Flowbite<small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">This is secondary text</small></h1>
            <h3>Name: {name} </h3>
            <h3>Tanggal Order: {formattedUpdatedDate} </h3>

            <TableInvoice></TableInvoice>
        </div>
    );
};

export default Invoice;