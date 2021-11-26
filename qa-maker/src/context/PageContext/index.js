import { createContext, useContext, useState } from "react"

const PageContext = createContext({})

export const PageContextProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false)

  return <PageContext.Provider value={{ isSelected, setIsSelected }}>{children}</PageContext.Provider>
}

export const usePage = () => {
  const context = useContext(PageContext)
  return context
}
