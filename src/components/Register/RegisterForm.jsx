import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import styledRegister from "../Register/RegisterForm.module.css";
import { useNavigate } from "react-router";
import { setUserInLocalStorage } from "../../utils/localStorage";
import { Alert } from "../AlertComponent/Alert";
export const RegisterForm = () => {
  const Navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    provincia: "",
    direccion: "",
  };

  const schema = Yup.object({
    name: Yup.string()
      .min(4, "El nombre debe tener al menos 4 caracteres")
      .required("El nombre es obligatorio"),
    lastName: Yup.string()
      .min(4, "El apellido debe tener al menos 4 caracteres")
      .required("El apellido es obligatorio"),
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Los emails no coinciden")
      .required("Confirma tu email"),
    password: Yup.string()
      .min(4, "La contraseña debe tener al menos 4 caracteres")
      .required("Ingrese una contraseña"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("Confirme su contraseña"),
    provincia: Yup.string().required("Ingrese una provincia"),
    direccion: Yup.string().required("La direccion es obligatoria"),
  });

  const handleSubmit = (values) => {
    setIsRegistering(true);
    setTimeout(() => {
      const { name, lastName, password, email } = values;
      setUserInLocalStorage({ name, lastName, password, email });
      setShowAlert(true);
      setIsRegistering(false);
      setTimeout(() => {
        setShowAlert(false);
        Navigate("/login");
      }, 2000);
    }, 3000);
  };

  return (
    <div className={`${styledRegister.container}`}>
      <h1>Registrate!</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, touched }) => (
          <Form className={`${styledRegister.formContainer}`}>
            <label htmlFor="name">Nombre:</label>
            <Field type="text" id="name" name="name" placeholder="Nombre" />
            {touched.name && errors.name ? (
              <p className={`${styledRegister.error}`}>{errors.name}</p>
            ) : null}

            <label htmlFor="lastName">Apellido:</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Apellido"
            />
            {touched.lastName && errors.lastName ? (
              <p className={`${styledRegister.error}`}>{errors.lastName}</p>
            ) : null}

            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" placeholder="Email" />
            {touched.email && errors.email ? (
              <p className={`${styledRegister.error}`}>{errors.email}</p>
            ) : null}

            <label htmlFor="confirmEmail">Confirma tu Email:</label>
            <Field
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              placeholder="Confirme su email"
            />
            {touched.confirmEmail && errors.confirmEmail ? (
              <p className={`${styledRegister.error}`}>{errors.confirmEmail}</p>
            ) : null}

            <label htmlFor="provincia">Provincia:</label>
            <Field as="select" name="provincia" id="provincia">
              <option value="">Seleccione una provincia</option>
              <option value="catamarca">Catamarca</option>
              <option value="chaco">Chaco</option>
              <option value="chubut">Chubut</option>
              <option value="córdoba">Córdoba</option>
              <option value="corrientes">Corrientes</option>
              <option value="entre rios">Entre Rios</option>
              <option value="formosa">Formosa</option>
              <option value="jujuy">Jujuy</option>
              <option value="la pampa">La Pampa</option>
              <option value="la rioja">La Rioja</option>
              <option value="mendoza">Mendoza</option>
              <option value="misiones">Misiones</option>
              <option value="neuquén">Neuquén</option>
              <option value="rio negro">Rio Negro</option>
              <option value="salta">Salta</option>
              <option value="san juan">San Juan</option>
              <option value="san luis">San Luis</option>
              <option value="santa cruz">Santa Cruz</option>
              <option value="santa fe">Santa Fe</option>
              <option value="santiago del estero">Santiago Del Estero</option>
              <option value="tierra del fuego">Tierra Del Fuego</option>
              <option value="tucuman">Tucuman</option>
            </Field>
            {touched.provincia && errors.provincia ? (
              <p className={`${styledRegister.error}`}>{errors.provincia}</p>
            ) : null}

            <label htmlFor="direccion">Dirección:</label>
            <Field
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Dirección"
            />
            {touched.direccion && errors.direccion ? (
              <p className={`${styledRegister.error}`}>{errors.direccion}</p>
            ) : null}

            <label htmlFor="password">Contraseña:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
            />
            {touched.password && errors.password ? (
              <p className={`${styledRegister.error}`}>{errors.password}</p>
            ) : null}

            <label htmlFor="confirmPassword">Confirma tu Contraseña:</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme su contraseña"
            />
            {touched.confirmPassword && errors.confirmPassword ? (
              <p className={`${styledRegister.error}`}>
                {errors.confirmPassword}
              </p>
            ) : null}

            <button type="submit">
              {!isRegistering ? "Registrarse" : "Enviando..."}
            </button>
          </Form>
        )}
      </Formik>
      {showAlert && <Alert message="Usuario Creado Con exito" type="good" />}
    </div>
  );
};
