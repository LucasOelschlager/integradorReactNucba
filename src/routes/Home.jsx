import { Categorys } from "../components/Categorys/Categorys";
import { ContactForm } from "../components/Contact/Contact";
import { Hero } from "../components/Hero/Hero";
import { NosotrosSection } from "../components/Nosotros/NosotrosSection";
import { Products } from "../components/Products/Products";

export const Home = () => {
  return (
    <>
      <Hero />
      <NosotrosSection />
      <Categorys />
      <Products />
      <ContactForm />
    </>
  );
};
