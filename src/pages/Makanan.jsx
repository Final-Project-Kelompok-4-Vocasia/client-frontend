// pages/Makanan.js
import Navbar from "../components/Navbar";
import KategoriMenu from "../components/kategoriMenu";
import { menu } from "../utils/local";

function Makanan() {
  return (
    <div>
      <Navbar></Navbar>
      <KategoriMenu kategori="makanan" menuData={menu} />
    </div>
  );
}

export default Makanan;
