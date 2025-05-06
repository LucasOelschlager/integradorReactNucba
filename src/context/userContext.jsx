import { createContext, useState } from "react";

// Crea el contexto
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};