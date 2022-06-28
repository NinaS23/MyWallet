import {   Div , TituloEntrada , BodyEntrada , Salvar} from "./style.js";

export default function Entrada() {
    return (
        <>
            <BodyEntrada>
                <TituloEntrada>Nova entrada</TituloEntrada>
                <Div>
                    <input type="text" placeholder="Valor" />
                    <input type="text" placeholder="Descrição" />
                    <button><Salvar>Salvar entrada</Salvar></button>
                </Div>
            </BodyEntrada>
        </>
    )
}