import { List } from "../List/List";
import footerCss from "../footer/footer.module.css";
export const Footer = () => {
  return (
    <div className={`${footerCss.container}`}>
      <List query={`${footerCss.list}`}>
        <li className={`${footerCss.items}`}>
          Direccion: <span>Av. Alberdi 999</span>
        </li>
        <li>
          Email: <span>rosarioguitarstore@gmail.com</span>
        </li>
        <li className={`${footerCss.items}`}>
          Telefono: <span>3444412312</span>
        </li>
        <li className={`${footerCss.items}`}>
          Instagram: <span>@rosarioguitarstore</span>
        </li>
        <li className={`${footerCss.items}`}>©Copyright Lucas Oelschlager</li>
      </List>
    </div>
  );
};
