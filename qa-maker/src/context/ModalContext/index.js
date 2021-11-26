import { createContext, useContext, useState } from "react"

const ModalContext = createContext({})

export const ModalContextProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: '50vw',
      padding: '40px'
    },
  }

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }

  return <ModalContext.Provider value={{ modalIsOpen, setIsOpen, openModal, afterOpenModal, closeModal, customStyles }}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  const context = useContext(ModalContext)
  return context
}
