import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { List } from "../List/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styledCart from "../cartComponent/CartComponent.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  calculateTotal,
  updateQuantity,
} from "../../store/cartSlice";
import { useEffect } from "react";
export const CartComponent = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [items, dispatch]);
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
      <List query={`${styledCart.itemsContainer}`}>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className={styledCart.cartItem}>
              <img
                src={item.image}
                alt={item.name}
                className={styledCart.cartItemImage}
              />
              <div className={styledCart.cartItemDetails}>
                <p className={styledCart.cartItemName}>{item.name}</p>
                <p className={styledCart.cartItemQuantity}>
                  <span
                    className={`${styledCart.modifyQuantity}`}
                    onClick={() => {
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity:
                            item.quantity > 1
                              ? item.quantity - 1
                              : dispatch(removeFromCart(item.id)),
                        })
                      );
                      dispatch(calculateTotal());
                    }}
                  >
                    -
                  </span>
                  {item.quantity}
                  <span
                    className={`${styledCart.modifyQuantity}`}
                    onClick={() => {
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      );
                      dispatch(calculateTotal());
                    }}
                  >
                    +
                  </span>
                </p>
                <p className={styledCart.cartItemPrice}>
                  Precio: ${item.price * item.quantity}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className={styledCart.removeButton}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={`${styledCart.cartEmpty}`}>El carrito está vacío</p>
        )}
      </List>
      <div className={`${styledCart.total}`}>
        <p>TOTAL: ${total} </p>
        <button>Comprar</button>
      </div>
    </div>
  );
};
