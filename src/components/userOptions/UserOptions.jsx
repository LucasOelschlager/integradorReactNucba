import { getActiveUser } from "../../utils/localStorage";
import { List } from "lucide-react";
import styledOptions from "./userOptions.module.css";
export const UserOptions = () => {
  const user = getActiveUser();

  return (
    <div className={`${styledOptions.container}`}>
      <p>{`Hola, ${user.user.name}`}</p>
      <ul className={`${styledOptions.list}`}>
        <li>Perfil</li>
        <li>Opciones</li>
        <li>Cerrar Sesión</li>
      </ul>
    </div>
  );
};
