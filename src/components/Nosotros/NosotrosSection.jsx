import styles from "./NosotrosSection.module.css";

export const NosotrosSection = () => (
  <section className={styles.nosotrosSection} id="aboutUs">
    <div className={styles.content}>
      <h2>Sobre Nosotros</h2>
      <p>
        Somos una tienda apasionada por las guitarras y la música. Desde 2020,
        ofrecemos los mejores instrumentos y asesoramiento personalizado para
        músicos de todos los niveles. Nuestro equipo está formado por expertos
        que comparten tu amor por la música y te ayudarán a encontrar el
        instrumento perfecto.
      </p>
      <ul>
        <li>✔️ Atención personalizada</li>
        <li>✔️ Productos originales y garantizados</li>
        <li>✔️ Envíos a todo el país</li>
        <li>✔️ Más de 500 clientes satisfechos</li>
      </ul>
    </div>
    <div className={styles.imageContainer}>
      <img src="./tienda.jpg" alt="Equipo de la tienda" />
    </div>
  </section>
);
