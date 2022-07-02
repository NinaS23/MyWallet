import { useContext, useState } from "react";
import axios  from "axios";
import {  useNavigate } from "react-router-dom"
import {   Div , TituloEntrada , BodyEntrada , Salvar} from "./style.js";
import TokenContext from "../../providers/TokenContext.js";

export default function Entrada() {
    const [ valor , setValor ] = useState("")
    const [ description , setDescription ] = useState("")
   const { token } = useContext(TokenContext)
   const navigate = useNavigate()
  console.log(token)
    function enviarEntrada(){

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
        const promise = axios.post("http://localhost:5009/entrada", body , config);
        promise.then((response) => {
            console.log(response.data)
            navigate("/registro")
        })
        promise.catch((erro) => {
            console.log(erro)

        })
    }
    return (
        <>
            <BodyEntrada>
                <TituloEntrada>Nova entrada</TituloEntrada>
                <Div>
                    <input type="text" placeholder="Valor"  value={valor} onChange={(e) => setValor(e.target.value)}  />
                    <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button onClick={()=> enviarEntrada()}><Salvar>Salvar entrada</Salvar></button>
                </Div>
            </BodyEntrada>
        </>
    )
}