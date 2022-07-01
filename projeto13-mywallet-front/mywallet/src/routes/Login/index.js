import { Body, Input, Entrar } from "./style.js";
import { Link , useNavigate } from "react-router-dom"
import axios  from "axios";
import { useContext, useState   } from "react";
import UserContext from "../../providers/UserContext.js";
import TokenContext from "../../providers/TokenContext.js";
export default function Login() {
    const [ email , setEmail ] = useState("")
    const [ senha , setSenha ] = useState("")
    const {token , setToken } = useContext(TokenContext)
    const { nome , setNome } = useContext(UserContext)
    const navigate = useNavigate()
    function login(){
        const body ={
            email:email,
            senha:senha
        }
        const promise = axios.post("http://localhost:5009/", body);
        promise.then((response) => {
            console.log(response.data)
               setToken(response.data.token)   
               setNome(response.data.nome)  
               navigate("/registro")       
        })
        promise.catch((erro) => {
            console.log(erro)

        })
    }
    console.log(token)
    console.log(nome)

    return (
        <>
            <Body>
                <h1>MyWallet</h1>
                <div>
                    <Input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="text" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                <button onClick={()=>login()}><Entrar>Entrar</Entrar></button>

                <Link to={"/cadastro"}>
                    <h4>Primeira vez? Cadastre-se!</h4>
                </Link>
            </Body>
        </>

    )
}