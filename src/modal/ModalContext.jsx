import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const CustomModalProvider = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const[modalData, setModalData] = useState(null);

    const openModal = (data) => {
        setIsOpen(true);
        setModalData(data);
    }

    const closeModal = () => {
        setIsOpen(false);
        setModalData(null)
    }

    return <ModalContext.Provider value={{isOpen, modalData,openModal,closeModal}} >
        {children}
    </ModalContext.Provider>
}

export const useCustomGlobalModal = () => useContext(ModalContext)