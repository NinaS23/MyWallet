import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./routes/Cadastro";
import Entrada from "./routes/Entrada";
import Login from "./routes/Login";
import Registro from "./routes/Registro";
import Saida from "./routes/Saida";
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/cadastro" element={<Cadastro />} />
        <Route  path="/registro" element={<Registro />} />
        <Route  path="/entrada" element={<Entrada />} />
        <Route  path="/saida" element={<Saida />} />
        </Routes>
      </BrowserRouter>
    )
}