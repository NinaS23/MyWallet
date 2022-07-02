import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UserContext from "../../providers/UserContext.js";
import TokenContext from "../../providers/TokenContext.js";
import login from "../../assets/saida.svg"
import menos from "../../assets/menos.svg"
import mais from "../../assets/mais.svg"
import {
    BodyRegistro,
    TopoRegistro,
    Registros,
    Botoes,
    RegistroComDados,
     Saldo,
     Valor,
    Dados,
    Data,
    Texto,
    ValorSaida,
    SaldoTexto
} from "./style.js";



export default function Registro() {
    const [data , setData ] = useState([])
    const { nome } = useContext(UserContext)
    const { token , setToken } = useContext(TokenContext)
    const navigate = useNavigate()
    let entrada = 0
    let saidaDado = 0
    let calc = 0
    console.log(nome)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
    
        }
        const URL = "https://back-end-my-wallet-api.herokuapp.com/resgistro"
        const promise = axios.get(URL, config)
        promise.then((response) => {
            console.log(response.data)
            setData(response.data)
          
        });
        promise.catch((erro) => {
            console.log(erro)
        })
    }, [])
   

    function RenderizarDataEntrada({dataInfo , legenda , numero , index}) {
        return (
            <Dados key={index}>
                <Data>{dataInfo}</Data>
                <Texto>{legenda}</Texto>
                <Valor>{numero}</Valor>
            </Dados>
        )
    }


    function RenderizarDataSaida({dataInfo , legenda , numero , index}) {
        return (
            <Dados key={index}>
                <Data>{dataInfo}</Data>
                <Texto>{legenda}</Texto>
                <ValorSaida>{numero}</ValorSaida>
            </Dados>
        )
    }
 function verificaSaldo(){
     console.log("Oi")
     for(let i =0; i < data.length; i++){
         if(data[i].type === "entrada"){
             entrada += parseInt(data[i].valor)
         }
         if(data[i].type === "saida"){
             saidaDado += parseInt(data[i].valor)
         }
     }
     calc = (entrada - saidaDado)
 }

    if (data.length === 0) {

        return (
            <BodyRegistro>
                <TopoRegistro>
                    <h2>olá, {nome}</h2>
                    <img src={login} alt="botão de saida" onClick={() => {
                     setToken("");
                     navigate("/");}}/>
            </TopoRegistro>
            <Registros>
                <h2>Não há registros de entrada ou saída</h2>
            </Registros>
            <Botoes>
                <Link to={"/entrada"}>
                <button>
                    <div>
                        <img src={mais} alt="mais" />
                    </div>
                    <h3>Nova entrada</h3></button>
                </Link>

                <Link to={"/saida"}>
                <button>
                    <div>
                    <img src={menos} alt="mais" />
                    </div>
                    <h3>Nova saída</h3></button>
                </Link>
            </Botoes>
        </BodyRegistro>
    )
}
if(data.length > 0){
    verificaSaldo()
   
    return(
        <BodyRegistro>
            <TopoRegistro>
                <h2>olá, {nome}</h2>
                <img src={login} alt="botão de saida" onClick={() => {
                     setToken("");
                     navigate("/");}}/>
            </TopoRegistro>
            <RegistroComDados>
               {data.map((e , index)=>{
                   
                   if(e.type === "entrada"){
                  
                    return (
                        <RenderizarDataEntrada 
                        dataInfo={e.data}
                         legenda={e.desciption}
                         numero={e.valor}
                         key={index}
                         
                        />
                       )
                   }if(e.type === "saida"){
                   
                       return(
                        <RenderizarDataSaida 
                        dataInfo={e.data}
                         legenda={e.desciption}
                         numero={e.valor}
                         key={index}
                         
                        />
                       )
                   }
                 
               })} 
               <Saldo><h1>Saldo</h1><SaldoTexto cor={calc >= 0 ? "#03AC00" : "#C70000"}>{calc.toFixed(2).replace(".",",")}</SaldoTexto></Saldo> 
            </RegistroComDados>
            <Botoes>
                <Link to={"/entrada"}>
                <button>
                    <div>
                        <img src={mais} alt="mais" />
                    </div>
                    <h3>Nova entrada</h3></button>
                </Link>

                <Link to={"/saida"}>
                <button>
                    <div>
                    <img src={menos} alt="mais" />
                    </div>
                    <h3>Nova saída</h3></button>
                </Link>
            </Botoes>
        </BodyRegistro>
    )
}
} 

