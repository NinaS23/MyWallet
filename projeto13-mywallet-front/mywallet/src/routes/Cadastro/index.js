import { BodyCadastro , Input , Cadastrar} from "./style.js";
import { Link } from "react-router-dom"
export default function Cadastro(){
    return(
        <>
            <BodyCadastro>
                <h1>MyWallet</h1>
                <div>
                <Input type="text" placeholder="Nome"  />
                <Input type="text" placeholder="E-mail"  />
                <Input type="text" placeholder="Senha"  />
                <Input type="text" placeholder="Confirme a senha"  />
                </div>
                <button><Cadastrar>Cadastrar</Cadastrar></button>
                <Link to={"/"}>
                <h4>Já tem uma conta? Entre agora!</h4>
                </Link>
            </BodyCadastro>
        </>

    )
}