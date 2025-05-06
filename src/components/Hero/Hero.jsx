
import styledHero from "../Hero/Hero.module.css"
import { HashLink } from "react-router-hash-link"
export const Hero = () => {
    return (
        <>
            <div className={styledHero.heroContainer}>
                <div className={styledHero.text}>
                    <p className={styledHero.parr}>Pasión por las cuerdas, el alma en cada nota.</p>
                    <h2 >Rosario Guitar Store</h2>
                    <p className={styledHero.parr}>el destino ideal para los amantes de la guitarra. Encuentra instrumentos de calidad, accesorios imprescindibles y el mejor asesoramiento para que cada nota suene con pasión. ¡Déjate inspirar y lleva tu música al siguiente nivel!</p>
                    <div className={styledHero.buttonsContainer}>
                        <button><HashLink smooth to={'#products'}> Ver Productos</HashLink></button>
                        <button> <HashLink smooth to={'#contactForm'}>Envianos un mensaje</HashLink></button>
                    </div>
                </div>
                <div className={styledHero.image}>
                    <img src="./src/assets/hero/guitarrasHero.jpeg" alt="" />
                </div>

            </div >
        </>
    )
}