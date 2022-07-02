import { useContext, useState } from "react";
import axios  from "axios";
import {  useNavigate } from "react-router-dom"
import {   Div , TituloSaida , BodySaida , Salvar} from "./style.js";
import TokenContext from "../../providers/TokenContext.js";
export default function Saida(){
    const [ valor , setValor ] = useState("")
    const [ description , setDescription ] = useState("")
    const { token } = useContext(TokenContext)
    const navigate = useNavigate()
    function enviarSaida(){

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
    
        }
        console.log(config)
        const body ={
            "valor":valor,
            "desciption": description
        }
        const promise = axios.post("http://localhost:5009/saida", body , config);
        promise.then((response) => {
            console.log(response.data)
            navigate("/registro")
        })
        promise.catch((erro) => {
            console.log(erro)

        })
    }
    return(
        <>
            <BodySaida>
                <TituloSaida>Nova Saída</TituloSaida>
                <Div>
                    <input type="text" placeholder="Valor"  value={valor} onChange={(e) => setValor(e.target.value)}  />
                    <input type="text" placeholder="Descrição"  value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button onClick={() => enviarSaida()} ><Salvar>Salvar saída</Salvar></button>
                </Div>
            </BodySaida>
        </>
    )
}