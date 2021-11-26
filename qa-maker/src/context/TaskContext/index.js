import { createContext, useContext, useState } from "react"

const TaskContext = createContext({})

export const TaskContextProvider = ({ children }) => {
  const [listTask, setListTask] = useState()

  return <TaskContext.Provider value={{ listTask, setListTask }}>{children}</TaskContext.Provider>
}

export const useModal = () => {
  const context = useContext(TaskContext)
  return context
}
