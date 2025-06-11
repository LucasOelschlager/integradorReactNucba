import { useContext, useState } from "react";
import { CategoryContext } from "../../context/categoryContext";
import { useNavigate } from "react-router-dom";
import styledProducts from "../Products/Products.module.css";
import { useDispatch } from "react-redux";
import { addToCart, calculateTotal } from "../../store/cartSlice";
import { Alert } from "../AlertComponent/Alert";
import { getActiveUser } from "../../utils/localStorage";
export const Products = () => {
  const { renderProducts, currentPage, setCurrentPage, categorySet } =
    useContext(CategoryContext);
  const [showAlert, setShowAlert] = useState(false);
  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  const handleProductClick = (id) => {
    navigate(`/product?id=${id}`);
  };
  return (
    <div className={`${styledProducts.container}`} id="products">
      <div className="w-[100%] flex justify-center flex-wrap gap-8">
        <h2 className="text-3xl">Nuestros Productos</h2>
        <div className="flex justify center flex-col">
          <ul className={`${styledProducts.list}`}>
            {renderProducts().map((e) => (
              <li
                key={e.id}
                className={`${styledProducts.product}`}
                onClick={() => handleProductClick(e.id)}
                style={{ cursor: "pointer" }}
              >
                <img src={e.image} alt="" className={`${styledProducts.img}`} />
                <h4>{e.name}</h4>
                <span className="font-serif font-bold text-[18px] ">
                  {"$" + e.price}
                </span>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    if (getActiveUser()) {
                      handleAddToCart(e);
                      dispatch(calculateTotal());
                      setShowAlert(true);
                      setTimeout(() => setShowAlert(false), 2000);
                    } else {
                      setShowAlert(true);
                      setTimeout(() => setShowAlert(false), 2000);
                    }
                  }}
                >
                  Añadir al carrito
                </button>
              </li>
            ))}
          </ul>
          <div
            className={
              categorySet === "all"
                ? `${styledProducts.pageContainer}`
                : "hidden"
            }
          >
            {currentPage === 1 ? null : (
              <button
                onClick={() => {
                  handlePrevPage();
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${styledProducts.buttonPage}`}
              >
                Anterior
              </button>
            )}
            <span className="text-2xl">{currentPage}</span>
            {currentPage === 4 ? (
              <span>No hay mas productos</span>
            ) : (
              <button
                onClick={() => {
                  handleNextPage();

                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${styledProducts.buttonPage}`}
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
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
