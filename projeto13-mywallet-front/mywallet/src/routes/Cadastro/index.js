

import { BodyCadastro , Input , Cadastrar} from "./style.js";
import { Link ,  useNavigate} from "react-router-dom";
import axios from "axios"
import { useState  } from "react";
export default function Cadastro() {
    const [ userInfo , setUserInfo] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    })
    const navigate = useNavigate()


    function EnviarCorpo() {
        const body = {
            nome: userInfo.nome,
            email: userInfo.email,
            senha: userInfo.senha,
            senha2: userInfo.confirmarSenha
        }
        const promise = axios.post("https://back-end-my-wallet-api.herokuapp.com/cadastrar", body);

        promise.then((response) => {
            console.log(response.data)
            navigate("/")
        })
        promise.catch((erro) => {
            console.log(erro)

        })

    }
  
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
                <button onClick={() => EnviarCorpo()}><Cadastrar>Cadastrar</Cadastrar></button>
                <Link to={"/"}>
                    <h4>Já tem uma conta? Entre agora!</h4>
                </Link>
            </BodyCadastro>
        </>

    )
}