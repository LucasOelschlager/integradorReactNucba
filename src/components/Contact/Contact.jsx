import styledContactForm from "../Contact/Contact.module.css"

export const Contact = () => {
    return (
        <div className="flex " id="contactForm">
            <div className={`${styledContactForm.container}`}>
                <h3 className="text-3xl">Solicitá asesoramiento</h3>
                <p className="text-2xl" > Te contactamos!</p >
                <form action="" className={`${styledContactForm.formulario}`}>
                    <label htmlFor="nameInput">
                        Nombre:
                        <input type="text" name="" id="nameInput" />
                    </label>

                    <label htmlFor="lastNameInput">
                        Apellido:
                        <input type="text" name="" id="lastNameInput" />
                    </label>
                    <label htmlFor="mailInput">
                        Email:
                        <input type="email" name="" id="mailInput" />
                    </label>
                    <label htmlFor="textInput">
                        Consulta:
                        <textarea name="" id=""></textarea>
                    </label>
                    <button>Enviar!</button>
                </form>
            </div >
            <div className={`${styledContactForm.mapContainer}`}>
                <h3 className="text-3xl">O visitanos en nuestra sucursal!</h3>
                <div className={`${styledContactForm.mapContainer}`}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3097789915655!2d-60.68987371112788!3d-32.91641280229496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6535d1fda51c9%3A0x6f4242957e8a1852!2sAv.%20Alberdi%20999%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1745256310488!5m2!1ses!2sar"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
