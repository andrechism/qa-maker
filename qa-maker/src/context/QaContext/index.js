import { createContext, useContext, useEffect, useState } from "react"

const QaContext = createContext({})

export const QaContextProvider = ({ children }) => {
  const [qaList, setQaList] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://qamaker-backend.herokuapp.com/qa")
      response = await response.json()
      setQaList(response)
    }

    fetchMyAPI()
  }, [])

  const createQa = async () => {
    let response = await fetch("https://qamaker-backend.herokuapp.com/qa", {
      method: 'POST'
    })
    response = await response.json()
    
  }

  return <QaContext.Provider value={{ qaList, setQaList }}>{children}</QaContext.Provider>
}

export const useQA = () => {
  const context = useContext(QaContext)
  return context
}
