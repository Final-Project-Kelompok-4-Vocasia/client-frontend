// const BASE_URL = "http://103.127.97.117:4004";
const BASE_URL = "http://localhost:4004";

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
    body: JSON.stringify({ username, email, password, nama, noTelepon: telepon, alamat, isSeller }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    alert(responseJson.msg);
    return { error: true, code: response.status };
  }

  return { error: false, code: response.status };
}

export { getAccessToken, putAccessToken, fetchWithToken, deleteAccessToken, login, register, getRoleUser, putRoleUser, deleteRoleUser };