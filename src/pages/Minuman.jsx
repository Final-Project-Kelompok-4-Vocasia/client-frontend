// pages/Minuman.js
import Navbar from "../components/Navbar";
import KategoriMenu from "../components/kategoriMenu";
import { menu } from "../utils/local";

function Minuman() {
  return (
    <div>
      <Navbar></Navbar>
      <KategoriMenu kategori="minuman" menuData={menu} />
    </div>
  );
}

export default Minuman;
