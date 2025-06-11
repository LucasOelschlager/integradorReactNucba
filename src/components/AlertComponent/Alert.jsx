import alertCss from "../AlertComponent/Alert.module.css";

export const Alert = ({ message, type }) => (
  <div className={alertCss.card}>
    <h4 className={type == "error" ? `${alertCss.error}` : `${alertCss.good}`}>
      {message}
    </h4>
  </div>
);
