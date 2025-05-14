import styledForm from "../userData/LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { UserContext } from "../../context/userContext";
import { setActiveUser } from "../../utils/localStorage";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const { isLoggedIn, setIsLoggedIn, setUserName } = useContext(UserContext);
  const initialValues = {
    email: "",
    password: "",
    checked: false,
  };

  const schemaLogin = Yup.object({
    email: Yup.string()
      .email("El email no es valido")
      .required("Ingrese un email"),
    password: Yup.string().required("Ingrese una contraseña"),
    checked: Yup.boolean().oneOf(
      [true],
      "Debe aceptar los terminos y condiciones"
    ),
  });

  const handleLogin = (values) => {
    setIsLogin(true);
    let users = localStorage.getItem("users");
    users = users ? JSON.parse(users) : [];

    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    setTimeout(() => {
      if (user) {
        alert("Inicio de sesión Exitoso");
        navigate("/");
        setActiveUser({ user });
        setIsLoggedIn(true);
      } else {
        alert("Las credenciales no son validas");
      }
      setIsLogin(false);
    }, 3000);
  };

  return (
    <div className={`${styledForm.container}`}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={schemaLogin}
      >
        {({ errors, touched }) => (
          <Form className={`${styledForm.formContainer}`}>
            <h2>Inicia Sesión</h2>
            <label
              htmlFor="emailInput"
              className={`${styledForm.inputContainer}`}
            >
              Email
              <Field
                type="text"
                name="email"
                placeholder="Ingrese su email"
                id="emailInput"
              />
              {touched.email && errors.email ? (
                <p className={`${styledForm.error}`}>{errors.email}</p>
              ) : null}
            </label>
            <label
              htmlFor="passwordInput"
              className={`${styledForm.inputContainer}`}
            >
              Contraseña
              <Field
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                id="passwordInput"
              />
              {touched.password && errors.password ? (
                <p className={`${styledForm.error}`}>{errors.password}</p>
              ) : null}
            </label>

            <label htmlFor="termsConditions" className="font-serif flex gap-2">
              Acepto los términos y condiciones
              <Field
                type="checkbox"
                name="checked"
                id="termsConditions"
                className={`${styledForm.check}`}
              />
            </label>
            {touched.checked && errors.checked ? (
              <p className={`${styledForm.error}`}>{errors.checked}</p>
            ) : null}
            <button type="submit">
              {!isLogin ? "Iniciar Sesión" : "Iniciando Sesión..."}
            </button>
            <label className="font-serif text-[16px]">
              Si no tienes una cuenta{" "}
              <Link
                to={"/register"}
                className="font-serif text-[16px] text-[#ff7d00]"
              >
                Crea una aquí
              </Link>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
};
