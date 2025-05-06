import { createContext, useState } from "react";
import productos from "../data/products.json"
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categorySet, setCategorySet] = useState("all");
    const [currentPage, setCurrentPage] = useState(1)
    const productsPage = 10
    const renderProducts = () => {
        const filteredProducts = productos.filter((e) => {
            return categorySet === "all" || e.category === categorySet
        })
        const startIndex = (currentPage - 1) * productsPage;
        const endIndex = startIndex + productsPage

        return filteredProducts.slice(startIndex, endIndex)
    };

    return (
        <CategoryContext.Provider value={{ categorySet, setCategorySet, renderProducts, currentPage, setCurrentPage }}>
            {children}
        </CategoryContext.Provider>
    );
};