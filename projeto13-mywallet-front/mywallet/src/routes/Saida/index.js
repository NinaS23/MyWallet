import {   Div , TituloSaida , BodySaida , Salvar} from "./style.js";
export default function Saida(){
    return(
        <>
            <BodySaida>
                <TituloSaida>Nova entrada</TituloSaida>
                <Div>
                    <input type="text" placeholder="Valor" />
                    <input type="text" placeholder="Descrição" />
                    <button><Salvar>Salvar saída</Salvar></button>
                </Div>
            </BodySaida>
        </>
    )
}