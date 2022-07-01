import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cadastro from "./routes/Cadastro";
import Entrada from "./routes/Entrada";
import Login from "./routes/Login";
import Registro from "./routes/Registro";
import Saida from "./routes/Saida";
import UserContext from "./providers/UserContext";
import TokenContext from "./providers/TokenContext";

export default function App(){
  const [token, setToken] = useState("")
  const [nome , setNome] = useState("")
    return(
      <TokenContext.Provider value={{token , setToken}}>
      <UserContext.Provider value={{nome , setNome}}>
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/cadastro" element={<Cadastro />} />
        <Route  path="/registro" element={<Registro />} />
        <Route  path="/entrada" element={<Entrada />} />
        <Route  path="/saida" element={<Saida />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
      </TokenContext.Provider>
    )
}