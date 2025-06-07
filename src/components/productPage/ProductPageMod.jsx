import productPageCss from "./productPageMod.module.css";
import productos from "../../data/products.json";
import { useSearchParams } from "react-router-dom";
export const ProductPageMod = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const guitar = productos.find((e) => String(e.id) === String(id));
  console.log(guitar);

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
        <button>AÑADIR AL CARRITO!</button>
      </div>
    </div>
  );
};
