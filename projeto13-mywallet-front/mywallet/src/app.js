import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
}