import { List } from "../List/List";
import { use, useContext, useState } from "react";
import styledNavbar from "../Navbar/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { UserContext } from "../../context/userContext";
import { CartComponent } from "../cartComponent/CartComponent";
import { CartContext } from "../../context/cartContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <header className={styledNavbar.header}>
      <div className={`${styledNavbar.logoContainerRes}`}>
        <img
          src="./src/assets/navbar/logoNavbar.png"
          alt=""
          className="size-25"
        />
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
            onClick={() => setIsCartOpen(true)}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ff7d00" }}
              onClick={() => {
                setIsMenuOpen(false);
                setIsCartOpen(!isCartOpen);
              }}
            />
          </button>
          <button className={`${styledNavbar.loginBtn}`}>
            <Link to={"/login"}>Iniciar Sesión</Link>
          </button>
        </div>
      </nav>
      {isCartOpen === true ? <CartComponent /> : null}
    </header>
  );
};
