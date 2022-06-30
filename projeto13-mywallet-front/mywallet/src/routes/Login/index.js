import { Body, Input, Entrar } from "./style.js";
import { Link } from "react-router-dom"
import { useState } from "react";
export default function Login() {
    const [ email , setEmail ] = useState("")
    const [ senha , setSenha ] = useState("")
    
    return (
        <>
            <Body>
                <h1>MyWallet</h1>
                <div>
                    <Input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    <Input type="text" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
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