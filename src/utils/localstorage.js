const SELECTED_MENUS_KEY = "menus";

export const saveToLocalStorage = (data) => {
  localStorage.setItem(SELECTED_MENUS_KEY, JSON.stringify(data));
};

export const saveData = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const loadDataLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveSelectedMenusToLocalStorage = (data) => {
  saveToLocalStorage(SELECTED_MENUS_KEY, data);
};

export const loadSelectedMenusFromLocalStorage = () => {
  // const data = loadFromLocalStorage(SELECTED_MENUS_KEY)
  return loadFromLocalStorage(SELECTED_MENUS_KEY)
};


export default localStorage;
