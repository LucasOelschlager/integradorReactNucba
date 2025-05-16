import styledCategorys from "../Categorys/Categorys.module.css";
import categorias from "../../data/categorys.json";
import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";

export const Categorys = () => {
  const { categorySet, setCategorySet, setCurrentPage } =
    useContext(CategoryContext);
  return (
    <div className={`${styledCategorys.categoryContainer}`}>
      <h2 className="text-center text-4xl bg-[#0a0a0a]">Categorias</h2>
      <div className={`${styledCategorys.container}`}>
        <ul className={`${styledCategorys.list}`}>
          {categorias.map((e) => (
            <li
              key={e.id}
              className={
                categorySet == e.name.toLowerCase()
                  ? `${styledCategorys.categoryItemAct}`
                  : styledCategorys.categoryItem
              }
              onClick={() => {
                setCategorySet(e.name.toLowerCase());
                setCurrentPage(1);
              }}
            >
              <img
                src={`${e.image}`}
                alt={e.name}
                className={`${styledCategorys.categoryImg}`}
              />
              <h4>{e.name}</h4>
              <p>{e.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
