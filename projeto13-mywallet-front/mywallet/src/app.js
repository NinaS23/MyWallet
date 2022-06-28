import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./routes/Cadastro";
import Login from "./routes/Login";
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    )
}