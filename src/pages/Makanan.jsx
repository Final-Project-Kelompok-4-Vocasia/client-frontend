import Card from "../components/Card";
import Navbar from "../components/Navbar";

function Makanan() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div class="grid gap-4 grid-cols-3 grid-rows-3 p-10" >
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      </div>
    </div>
  );
}

export default Makanan;
