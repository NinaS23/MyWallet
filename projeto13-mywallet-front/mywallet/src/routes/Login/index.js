import { Body, Input, Entrar } from "./style.js";
import { Link } from "react-router-dom"
export default function Login() {
    return (
        <>
            <Body>
                <h1>MyWallet</h1>
                <div>
                    <Input type="text" placeholder="E-mail" />
                    <Input type="text" placeholder="Senha" />
                </div>
                <Link to={"/registro"}>
                    <button><Entrar>Entrar</Entrar></button>
                </Link>
                <Link to={"/cadastro"}>
                    <h4>Primeira vez? Cadastre-se!</h4>
                </Link>
            </Body>
        </>

    )
}