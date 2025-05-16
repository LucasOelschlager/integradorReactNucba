import { createContext, useState } from "react";

export const userOptionsContext = createContext();

export const UserOptionsProvider = ({ children }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  return (
    <userOptionsContext.Provider value={{ isOptionsOpen, setIsOptionsOpen }}>
      {children}
    </userOptionsContext.Provider>
  );
};
