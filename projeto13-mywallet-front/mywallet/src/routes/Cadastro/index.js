import { BodyCadastro , Input , Cadastrar} from "./style.js";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Cadastro() {
    const [ userInfo , setUserInfo] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    })
  
    return (
        <>
            <BodyCadastro>
                <h1>MyWallet</h1>
                <div>
                    <Input type="text"
                    placeholder="Nome"  
                    value={userInfo.nome}
                    onChange={e => { setUserInfo({ ...userInfo, nome: e.target.value }) }}
                    
                    />
                    <Input type="text" 
                    placeholder="E-mail"
                    value={userInfo.email}
                    onChange={e => { setUserInfo({ ...userInfo, email: e.target.value }) }}
                    />
                    <Input type="text"
                     placeholder="Senha"
                     value={userInfo.senha}
                     onChange={e => { setUserInfo({ ...userInfo, senha: e.target.value }) }} 
                     />
                    <Input type="text"
                     placeholder="Confirme a senha" 
                     value={userInfo.confirmarSenha}
                     onChange={e => { setUserInfo({ ...userInfo, confirmarSenha: e.target.value }) }}
                     />
                </div>
                <button><Cadastrar>Cadastrar</Cadastrar></button>
                <Link to={"/"}>
                    <h4>Já tem uma conta? Entre agora!</h4>
                </Link>
            </BodyCadastro>
        </>

    )
}