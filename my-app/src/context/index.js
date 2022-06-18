import { createContext, useState } from "react";

 //GLOBAL      // só trocar o nome Tema
export const TemaContext = createContext();
export const TemaProvider = ({ children }) => {
  const [temaSelecionado, setTemaSelecionado] = useState("escuro");

  return (
    <TemaContext.Provider value={{ temaSelecionado, setTemaSelecionado }}>
      {children}
    </TemaContext.Provider>
  );
};
