const BASE_URL = "http://103.127.97.117:4004";
//const BASE_URL = "http://localhost:4004";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

function deleteAccessToken() {
  return localStorage.removeItem("accessToken");
}

function getRoleUser() {
  return localStorage.getItem("isSeller");
}

function putRoleUser(role) {
  return localStorage.setItem("isSeller", role);
}

function deleteRoleUser() {
  return localStorage.removeItem("isSeller");
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();
  console.log("Response BE: ", JSON.stringify(responseJson, null, 2));

  //Error Handling
  if (response.status >= 400) {
    alert(responseJson.msg);
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function register({ username, email, password, nama, telepon, alamat, isSeller }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      nama,
      noTelepon: telepon,
      alamat,
      isSeller,
    }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    alert(responseJson.msg);
    return { error: true, code: response.status };
  }

  return { error: false, code: response.status };
}

//GET USERS
async function getUserData() {
  const response = await fetchWithToken(`${BASE_URL}/users`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

// DELETE USERS
async function deleteUser(id) {
  const response = await fetchWithToken(`${BASE_URL}/users/delete/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

//CRUD Menu
async function addMenu({ namaMenu, kategori, harga, image }) {
  const response = await fetchWithToken(`${BASE_URL}/menu/addMenu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ namaMenu, kategori, harga, image }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

// async function getMenu() {
//   const response = await fetchWithToken(`${BASE_URL}/menu`);
//   const responseJson = await response.json();

//   console.log("Response:");

//   if (response.status >= 400) {
//     return { error: true, code: response.status, data: null };
//   }

//   return { error: false, code: response.status, data: responseJson };
// }

async function getMenu() {
  try {
    const response = await fetchWithToken(`${BASE_URL}/menu`);
    const responseJson = await response.json();

    if (response.status >= 400) {
      return { error: true, code: response.status, data: null };
    }

    return { error: false, code: response.status, data: responseJson };
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return { error: true, code: 500, data: null };
  }
}

async function editMenu({ id, namaMenu, kategori, harga, image }) {
  const response = await fetchWithToken(`${BASE_URL}/menu/updateMenu/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ namaMenu, kategori, harga, image }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function deleteMenu(id) {
  const response = await fetchWithToken(`${BASE_URL}/menu/deleteMenu/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

//Get History Order (untuk role Seller)
async function getHistoryOrder() {
  const response = await fetchWithToken(`${BASE_URL}/order/history`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  //Tambah infromasi User ke kolom tabel
  const orderWithUserInfo = responseJson.map((order) => ({
    ...order,
    userId: order.User.id,
    nama: order.User.nama,
    alamat: order.User.alamat,
  }));

  return { error: false, code: response.status, data: orderWithUserInfo };
}

async function addOrder(order) {
  const response = await fetchWithToken(`${BASE_URL}/ordermenu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson };
}

async function getHistoryOrderBuyer(order) {
  const response = await fetchWithToken(`${BASE_URL}/order/history`, {
    method: "GET",
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson };
}

export {
  getAccessToken,
  putAccessToken,
  fetchWithToken,
  deleteAccessToken,
  login,
  register,
  getRoleUser,
  putRoleUser,
  deleteRoleUser,
  addMenu,
  getMenu,
  editMenu,
  deleteMenu,
  getUserData,
  deleteUser,
  getHistoryOrder,
  getHistoryOrderBuyer,
  addOrder,
};
