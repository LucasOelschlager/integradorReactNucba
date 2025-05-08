import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { List } from "../List/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styledCart from "../cartComponent/CartComponent.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
export const CartComponent = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <div
      className={
        isCartOpen === true
          ? `${styledCart.cartAct}`
          : `${styledCart.cartNotAct}`
      }
    >
      <div className={`${styledCart.closeCart}`}>
        <FontAwesomeIcon
          icon={faXmark}
          className="fa-lg"
          style={{ color: "#ff7d00", fontSize: "25px" }}
          onClick={() => setIsCartOpen(false)}
        />
        <h2>Carrito...</h2>
      </div>
      <List query={`${styledCart.itemsContainer}`}></List>
      <div className={`${styledCart.total}`}>
        <p>TOTAL: </p>
        <button>Comprar</button>
      </div>
    </div>
  );
};
