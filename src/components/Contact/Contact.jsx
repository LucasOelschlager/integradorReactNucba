import styledContactForm from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export const ContactForm = () => {
  const [loading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    consulta: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    setIsLoading(true);
    setTimeout(() => {
      alert("Consulta enviada con exito");

      resetForm();
      setIsLoading(false);
    }, 3000);
  };

  const schema = Yup.object({
    name: Yup.string()
      .min(4, "El nombre debe tener 4 carácteres (como minimo)")
      .required("El nombre es obligatorio"),
    lastName: Yup.string()
      .min(4, "El apellido debe tener 4 carácteres (como minimo)")
      .required("El apellido es obligatorio"),
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    consulta: Yup.string()
      .min(10, "La consulta debe tener al menos 10 caracteres")
      .required("La consulta es obligatoria"),
  });

  return (
    <div
      className={`${styledContactForm.section_contact_container}`}
      id="contactForm"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <div className={`${styledContactForm.containerForm}`}>
            <h3 className="text-3xl">Solicitá asesoramiento</h3>
            <p className="text-2xl"> Te contactamos!</p>
            <Form action="" className={`${styledContactForm.formulario}`}>
              <label htmlFor="nameInput">Nombre: </label>
              <Field type="text" name="name" id="nameInput" />
              {touched.name && errors.name ? (
                <p className={`${styledContactForm.error}`}>{errors.name}</p>
              ) : null}

              <label htmlFor="lastNameInput">Apellido:</label>
              <Field type="text" name="lastName" id="lastNameInput" />
              {touched.lastName && errors.lastName ? (
                <p className={`${styledContactForm.error}`}>
                  {errors.lastName}
                </p>
              ) : null}

              <label htmlFor="mailInput">Email:</label>
              <Field type="email" name="email" id="mailInput" />
              {touched.email && errors.email ? (
                <p className={`${styledContactForm.error}`}>{errors.email}</p>
              ) : null}

              <label htmlFor="textInput">Consulta:</label>
              <Field as="textarea" name="consulta" id="textInput" />
              {touched.consulta && errors.consulta ? (
                <p className={`${styledContactForm.error}`}>
                  {errors.consulta}
                </p>
              ) : null}

              <button type="submit">
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <div className={`${styledContactForm.map}`}>
        <h4>O visitanos en nuestro local!</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3198335892303!2d-60.68734434359199!3d-32.91614709456553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6535d221ca4a3%3A0x34d1c44e172c3099!2sAv.%20Alberdi%201009%2C%20S2013%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1747412702289!5m2!1ses!2sar"
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
