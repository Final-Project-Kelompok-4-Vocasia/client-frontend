import Button from "../components/Button";
import Navbar from "../components/Navbar";
import TableChart from "../components/TableChart";

function Chart () {
    return(
        <div>
        <Navbar></Navbar>

        <div class="p-10">
         <TableChart></TableChart>
        </div>
        <div>
            <Button></Button>
        </div>

      </div>
    );
}
export default Chart;