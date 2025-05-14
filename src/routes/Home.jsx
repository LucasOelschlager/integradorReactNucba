import { Categorys } from "../components/Categorys/Categorys";
import { Contact } from "../components/Contact/Contact";
import { Hero } from "../components/Hero/Hero";
import { Products } from "../components/Products/Products";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categorys />
      <Products />
    </>
  );
};
