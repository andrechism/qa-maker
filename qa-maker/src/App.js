import { Routes } from "./routes"
import { GlobalStyled } from "./styles"
import Modal from "react-modal"
import { ModalContextProvider } from "./context/ModalContext"
import { PageContextProvider } from "./context/PageContext"
import { QaContextProvider } from "./context/QaContext"

export const App = () => {
  return (
    <>
      <ModalContextProvider>
        <PageContextProvider>
          <QaContextProvider>
            <GlobalStyled />
            <Routes />
          </QaContextProvider>
        </PageContextProvider>
      </ModalContextProvider>
    </>
  )
}

Modal.setAppElement("#root")
