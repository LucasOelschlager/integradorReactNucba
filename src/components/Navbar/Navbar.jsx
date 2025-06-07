import { List } from "../List/List";
import { useContext, useState, useEffect } from "react";
import styledNavbar from "../Navbar/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { User } from "lucide-react";
import { userOptionsContext } from "../../context/userOptionsContext";
import {
  faCartShopping,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CartComponent } from "../cartComponent/CartComponent";
import { CartContext } from "../../context/cartContext";
import { UserOptions } from "../userOptions/UserOptions";
import { getActiveUser } from "../../utils/localStorage";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [activeUser, setActiveUser] = useState(getActiveUser());
  const { isOptionsOpen, setIsOptionsOpen } = useContext(userOptionsContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUser(getActiveUser());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`${styledNavbar.header}`}>
      <div className={`${styledNavbar.logoContainerRes}`}>
        <img
          src="/img/logoNavbar.png"
          alt="Logo"
          className="size-25"
          loading="lazy"
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
          onClick={() => setIsOptionsOpen(false)}
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
            src="/img/logoNavbar.png"
            alt="Logo"
            className="size-25"
            loading="lazy"
          />
          <h1 className={styledNavbar.title}>Rosario Guitar Store</h1>
        </div>
        <List query={styledNavbar.list}>
          <li className={styledNavbar.navbar_link}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={styledNavbar.navbar_link}>
            <Link to={"/Nosotros"}>Nosotros</Link>
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
          <button className={`${styledNavbar.loginBtn}`}>
            {activeUser ? (
              <User onClick={() => setIsOptionsOpen(!isOptionsOpen)} />
            ) : (
              <Link to={"/login"}>Iniciar Sesión</Link>
            )}
          </button>
        </div>
      </nav>
      <CartComponent />
      <UserOptions />
    </header>
  );
};
