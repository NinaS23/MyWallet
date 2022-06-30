import { useState } from "react";
import {   Div , TituloEntrada , BodyEntrada , Salvar} from "./style.js";

export default function Entrada() {
    const [ valor , setValor ] = useState("")
    const [ description , setDescription ] = useState("")
  
    return (
        <>
            <BodyEntrada>
                <TituloEntrada>Nova entrada</TituloEntrada>
                <Div>
                    <input type="text" placeholder="Valor"  value={valor} onChange={(e) => setValor(e.target.value)}  />
                    <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button><Salvar>Salvar entrada</Salvar></button>
                </Div>
            </BodyEntrada>
        </>
    )
}