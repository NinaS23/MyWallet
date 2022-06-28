import { Body , Input , Entrar} from "./style.js";
export default function Login() {
    return (
        <>
            <Body>
                <h1>MyWallet</h1>
                <div>
                <Input type="text" placeholder="email"  />
                <Input type="text" placeholder="senha"  />
                </div>
                <button><Entrar>Entrar</Entrar></button>
                <h4>Primeira vez? Cadastre-se!</h4>
            </Body>
        </>

    )
}