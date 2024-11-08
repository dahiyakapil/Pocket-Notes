import { Children, createContext, useContext, useState } from "react";

const modalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModel] = useState(false);

  return (
    <modalContext.Provider
      value={{ showModal, setShowModel }}

    >
        {children}
    </modalContext.Provider>
  );
};

export const useModal = () => useContext(modalContext);