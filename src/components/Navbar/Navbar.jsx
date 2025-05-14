import { List } from "../List/List";
import { useContext, useState, useEffect } from "react";
import styledNavbar from "../Navbar/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoNavbar from "../../assets/navbar/logoNavbar.png";

import {
  faCartShopping,
  faXmark,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CartComponent } from "../cartComponent/CartComponent";
import { CartContext } from "../../context/cartContext";
import { getActiveUser, removeActiveUser } from "../../utils/localStorage";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [activeUserState, setActiveUserState] = useState(getActiveUser()); // Estado para el usuario activo

  const handleLogout = () => {
    removeActiveUser(); // Elimina el usuario de localStorage
    setActiveUserState(null); // Actualiza el estado local
  };

  // Sincroniza el estado con localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      const user = getActiveUser();
      setActiveUserState(user);
    }, 500); // Verifica cada 500ms si hay un usuario activo

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <header className={styledNavbar.header}>
      <div className={`${styledNavbar.logoContainerRes}`}>
        <img src={logoNavbar} alt="" className="size-25" />
        <h1 className={styledNavbar.title}>Rosario Guitar Store</h1>
      </div>
      <button
        className={`${styledNavbar.menuClose}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          style={{ color: "#ff7d00", fontSize: "30px" }}
        />
      </button>
      <nav
        className={
          isMenuOpen === false
            ? `${styledNavbar.navbar}`
            : `${styledNavbar.navbarRes}`
        }
      >
        <div className={`${styledNavbar.logoContainer}`}>
          <img
            src="./src/assets/navbar/logoNavbar.png"
            alt=""
            className="size-25"
          />
          <h1 className={styledNavbar.title}>Rosario Guitar Store</h1>
        </div>
        <List query={styledNavbar.list}>
          <li className={styledNavbar.navbar_link}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={styledNavbar.navbar_link}>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li className={styledNavbar.navbar_link}>
            <HashLink smooth to="/#products">
              Productos
            </HashLink>
          </li>
          <li className={styledNavbar.navbar_link}>
            <HashLink smooth to="/#contactForm">
              Contacto
            </HashLink>
          </li>
        </List>

        <div className={`${styledNavbar.btnContainer}`}>
          <button
            className={`${styledNavbar.cartBtn}`}
            onClick={() => {
              setIsMenuOpen(false);
              setIsCartOpen(!isCartOpen);
            }}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ff7d00" }}
            />
          </button>
          {activeUserState ? (
            <button
              className={`${styledNavbar.userBtn}`}
              onClick={() => setIsUserOpen(!isUserOpen)}
            >
              <FontAwesomeIcon icon={faUser} style={{ color: "#ff7d00" }} />
            </button>
          ) : (
            <button
              className={`${styledNavbar.loginBtn}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to={"/login"}>Iniciar Sesión</Link>
            </button>
          )}
        </div>
        {activeUserState && (
          <div
            className={
              isUserOpen
                ? `${styledNavbar.userOptions}`
                : `${styledNavbar.userOptionsClose}`
            }
          >
            <p>Hola, {activeUserState.name}</p>
            <ul className={`${styledNavbar.userList}`}>
              <li>Perfil</li>
              <li>Opciones</li>
              <li onClick={handleLogout}>Cerrar sesión</li>
            </ul>
          </div>
        )}
      </nav>
      <CartComponent />
    </header>
  );
};
