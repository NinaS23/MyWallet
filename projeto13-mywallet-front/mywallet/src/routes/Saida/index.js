import { useState } from "react";
import {   Div , TituloSaida , BodySaida , Salvar} from "./style.js";
export default function Saida(){
    const [ valor , setValor ] = useState("")
    const [ description , setDescription ] = useState("")

    return(
        <>
            <BodySaida>
                <TituloSaida>Nova Saída</TituloSaida>
                <Div>
                    <input type="text" placeholder="Valor"  value={valor} onChange={(e) => setValor(e.target.value)}  />
                    <input type="text" placeholder="Descrição"  value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button><Salvar>Salvar saída</Salvar></button>
                </Div>
            </BodySaida>
        </>
    )
}