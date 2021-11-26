import { Routes } from "./routes"
import { GlobalStyled } from "./styles"
import Modal from "react-modal"
import { ModalContextProvider } from "./context/ModalContext"

export const App = () => {
  return (
    <>
      <ModalContextProvider>
        <GlobalStyled />
        <Routes />
      </ModalContextProvider>
    </>
  )
}

Modal.setAppElement("#root")
