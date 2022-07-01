import { useState } from "react";
import { Link } from "react-router-dom";
import {
    BodyRegistro,
    TopoRegistro,
    Registros,
    Botoes,
    RegistroComDados,
     Saldo,
     Valor,
    Dados,
    Data,
    Texto
} from "./style.js";
const saida = "../../../public/assets/vector.png"

export default function Registro() {
    const [dados, setDados] = useState(true)
    if (dados === false) {

        return (
            <BodyRegistro>
                <TopoRegistro>
                    <h2>olá ,fulano</h2>
                    <img src={saida} alt="botão de saida" />
            </TopoRegistro>
            <Registros>
                <h2>Não há registros de entrada ou saída</h2>
            </Registros>
            <Botoes>
                <Link to={"/entrada"}>
                <button><div>+</div><h3>Nova entrada</h3></button>
                </Link>
                <Link to={"/saida"}>
                <button><div>-</div><h3>Nova saída</h3></button>
                </Link>
            </Botoes>
        </BodyRegistro>
    )
}
if(dados === true){
    return(
        <BodyRegistro>
            <TopoRegistro>
                <h2>olá ,fulano</h2>
                <img src={saida} alt="botão de saida" />
            </TopoRegistro>
            <RegistroComDados>
                <Dados>
                <Data>01/07</Data>
                <Texto>comer com mamãe</Texto>
                <Valor>300</Valor>
                </Dados>
               <Saldo><h1>Saldo</h1><h3>valor</h3></Saldo> 
            </RegistroComDados>
            <Botoes>
                <Link to={"/entrada"}>
                <button><div>+</div><h3>Nova entrada</h3></button>
                </Link>

                <Link to={"/saida"}>
                <button><div>-</div><h3>Nova saída</h3></button>
                </Link>
            </Botoes>
        </BodyRegistro>
    )
}
} 

