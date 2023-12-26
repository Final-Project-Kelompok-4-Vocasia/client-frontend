//<-- product -->
let array_product = [
  {
    id: 1,
    menu: "Matcha",
    category: "Minuman",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    menu: "Roti",
    category: "Makanan",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    menu: "Kentang",
    category: "Makanan",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
  {
    menu: "Matcha",
    category: "Minuman",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
  {
    menu: "Roti",
    category: "Makanan",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    menu: "Kentang",
    category: "Makanan",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    menu: "Matcha",
    category: "Minuman",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    menu: "Roti",
    category: "Makanan",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 7,
    menu: "Kentang",
    category: "Makanan",
    price: "Rp. 17.000",
    img: "https://tse1.mm.bing.net/th?id=OIP.516jdHlRpTz0YC3gnWkd-QHaE8&pid=Api&P=0&h=180",
  },
];

//<-- history order -->
let array_history = [
  {
    orderId: "1",
    createdAt: new Date(),
    menu: "Matcha",
    status: "Completed",
    quantity: "1",
    price: "Rp. 17.000",
  },
  {
    orderId: "2",
    createdAt: new Date(),
    menu: "Roti",
    status: "Cancelled",
    quantity: "1",
    price: "Rp. 17.000",
  },
  {
    orderId: "3",
    createdAt: new Date(),
    menu: "Kentang",
    status: "Completed",
    quantity: "1",
    price: "Rp. 17.000",
  },
  {
    orderId: "4",
    createdAt: new Date(),
    menu: "Matcha",
    status: "Completed",
    quantity: "1",
    price: "Rp. 17.000",
  },
  {
    orderId: "5",
    createdAt: new Date(),
    menu: "Roti",
    status: "Cancelled",
    quantity: "1",
    price: "Rp. 17.000",
  },
  {
    orderId: "6",
    createdAt: new Date(),
    menu: "Kentang",
    status: "Completed",
    quantity: "1",
    price: "Rp. 17.000",
  },
  {
    orderId: "7",
    createdAt: new Date(),
    menu: "Kentang",
    status: "Completed",
    quantity: "1",
    price: "Rp. 17.000",
  },
];

//<-- users -->
let array_users = [
  {
    username: "vocasia12",
    email: "vocasia@gmail.com",
    nama: "vocasia",
    nomertelpon: "085xxxx",
    alamat: "Jl. Taman Siswa",
  },
  {
    username: "vocasia12",
    email: "vocasia@gmail.com",
    nama: "vocasia",
    nomertelpon: "085xxxx",
    alamat: "Jl. Taman Siswa",
  },
  {
    username: "vocasia12",
    email: "vocasia@gmail.com",
    nama: "vocasia",
    nomertelpon: "085xxxx",
    alamat: "Jl. Taman Siswa",
  },
  {
    username: "vocasia12",
    email: "vocasia@gmail.com",
    nama: "vocasia",
    nomertelpon: "085xxxx",
    alamat: "Jl. Taman Siswa",
  },
  {
    username: "vocasia12",
    email: "vocasia@gmail.com",
    nama: "vocasia",
    nomertelpon: "085xxxx",
    alamat: "Jl. Taman Siswa",
  },
  {
    username: "vocasia13",
    email: "vocasia@gmail.com",
    nama: "vocasiaq",
    nomertelpon: "085xxxx",
    alamat: "Jl. Taman Siswa",
  },
];

//<--- function --->
// ../utils/local
function addProduct(newProduct) {
  array_product = [...array_product, newProduct];
}

function getProduct() {
  return array_product;
}

//Hapus array product berdasarkan IDnya
function handleDeleteProduct(menuId) {
  array_product = array_product.filter((item) => item.id !== menuId);
}

function getHistory() {
  return array_history;
}

function getUsers() {
  return array_users;
}
export { addProduct, getProduct, handleDeleteProduct, getHistory, getUsers };
