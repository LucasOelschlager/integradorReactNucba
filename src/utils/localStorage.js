export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON(cart) : [];
};

export const initializeUsersInLocalStorage = () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([])); // Crear un array vacío
  }
};

export const setUserInLocalStorage = ({ name, lastName, password, email }) => {
  let users = localStorage.getItem("users");
  users = JSON.parse(users);
  let user = { id: `${users.length + 1}`, name, lastName, password, email };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};
