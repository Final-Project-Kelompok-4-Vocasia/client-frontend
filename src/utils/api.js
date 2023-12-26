const BASE_URL = "http://103.127.97.117:4004";

function getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  
  function putAccessToken(accessToken) {
    return localStorage.setItem("accessToken", accessToken);
  }
  
  function deleteAccessToken() {
    return localStorage.removeItem("accessToken");
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

async function getHistoryOrder(order) {
    const response = await fetchWithToken(`${BASE_URL}/order/history`, {
      method: "GET"
    });

    const responseJson = await response.json();
   

    if (response.status >= 400) {
      return { error: true, code: response.status, data: null };
    }
  
    return { error: false, code: response.status, data: responseJson };
}

  export { getAccessToken, putAccessToken, fetchWithToken, deleteAccessToken, getMenu, addOrder, getHistoryOrder };