import { BodyCadastro , Input , Cadastrar} from "./style.js";
import { Link } from "react-router-dom"
export default function Cadastro(){
    return(
        <>
            <BodyCadastro>
                <h1>MyWallet</h1>
                <div>
                <Input type="text" placeholder="email"  />
                <Input type="text" placeholder="email"  />
                <Input type="text" placeholder="email"  />
                <Input type="text" placeholder="senha"  />
                </div>
                <button><Cadastrar>Cadatrar</Cadastrar></button>
                <Link to={"/cadastro"}>
                <h4>Já tem uma conta? Entre agora!</h4>
                </Link>
            </BodyCadastro>
        </>

    )
}