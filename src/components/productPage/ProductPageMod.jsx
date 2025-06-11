import productPageCss from "./productPageMod.module.css";
import productos from "../../data/products.json";
import { useSearchParams } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "../AlertComponent/Alert";
import { getActiveUser } from "../../utils/localStorage";
export const ProductPageMod = () => {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const guitar = productos.find((e) => String(e.id) === String(id));

  return (
    <div className={`${productPageCss.container}`}>
      <div className={`${productPageCss.imageContainer}`}>
        <aside>
          <img src={guitar.image} alt="" />
          <img src={guitar.image} alt="" />
          <img src={guitar.image} alt="" />
        </aside>
        <img src={guitar.image} alt="" />
      </div>
      <div className={`${productPageCss.productInfo}`}>
        <h2>{guitar.name}</h2>
        <span>${guitar.price}</span>
        <p>{guitar.description}</p>
        <button
          onClick={() => {
            if (getActiveUser()) {
              handleAddToCart(guitar);
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 2000);
            } else {
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 2000);
            }
          }}
        >
          AÑADIR AL CARRITO!
        </button>
      </div>
      {showAlert && (
        <Alert
          message={
            getActiveUser()
              ? "PRODUCTO AÑADIDO CORRECTAMENTE"
              : "Inicia Sesión o registrate para añadir un producto"
          }
          type={getActiveUser() ? "good" : "error"}
        />
      )}
    </div>
  );
};
