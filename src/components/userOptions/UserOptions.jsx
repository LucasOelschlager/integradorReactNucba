import { getActiveUser, removeActiveUser } from "../../utils/localStorage";

import styledOptions from "./userOptions.module.css";
import { userOptionsContext } from "../../context/userOptionsContext";
import { useContext } from "react";
export const UserOptions = () => {
  const user = getActiveUser();
  const { isOptionsOpen, setIsOptionsOpen } = useContext(userOptionsContext);
  return (
    <div
      className={
        isOptionsOpen ? styledOptions.container : styledOptions.containerHidden
      }
    >
      <p>{!user ? null : `Hola, ${user.user.name}`}</p>
      <ul className={`${styledOptions.list}`}>
        <li>Perfil</li>
        <li>Opciones</li>
        <li
          onClick={() => {
            removeActiveUser();
            setIsOptionsOpen(false);
          }}
        >
          Cerrar Sesión
        </li>
      </ul>
    </div>
  );
};
