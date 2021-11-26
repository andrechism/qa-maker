import { createContext, useContext, useEffect, useState } from "react";

const QaContext = createContext({});

export const QaContextProvider = ({ children }) => {
  const [qaList, setQaList] = useState([]);

  async function fetchMyAPI() {
    let response = await fetch("https://qamaker-backend.herokuapp.com/qa");
    response = await response.json();
    setQaList(response);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const createQa = async (name) => {
    console.log(name);
    await fetch("https://qamaker-backend.herokuapp.com/qa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: "",
      }),
    });

    fetchMyAPI();
  };

  return (
    <QaContext.Provider value={{ qaList, setQaList, createQa }}>
      {children}
    </QaContext.Provider>
  );
};

export const useQA = () => {
  const context = useContext(QaContext);
  return context;
};
