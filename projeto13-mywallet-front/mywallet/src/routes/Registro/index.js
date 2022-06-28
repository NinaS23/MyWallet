import { BodyRegistro , TopoRegistro , Registros , Botoes } from "./style.js";
import { Link } from "react-router-dom";
const saida = "../../../public/assets/vector.png"

export default function Registro() {

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
                <button><div>-</div><h3>Nova saída</h3></button>
            </Botoes>
        </BodyRegistro>
    )
} 