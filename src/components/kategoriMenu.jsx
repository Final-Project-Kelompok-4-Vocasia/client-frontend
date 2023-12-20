// components/KategoriMenu.js
import Card from "./Card";

function KategoriMenu({ kategori, menuData }) {
  return (
    <div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 p-10">
        {menuData
          .filter((menu) => menu.kategori === kategori)
          .map((filteredMenu, index) => (
            <Card key={index} menuData={filteredMenu} />
          ))}
      </div>
    </div>
  );
}

export default KategoriMenu;
