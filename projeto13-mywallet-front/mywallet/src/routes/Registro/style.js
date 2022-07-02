import styled from "styled-components"

const BodyRegistro = styled.div`
 display: flex;
 flex-direction:column;
 margin-top: 10%;

`
const TopoRegistro = styled.div`
display: flex;
margin-bottom: 3%;
margin-left: 3%;
justify-content: space-between;
img{
    width: 23px;
    height: 24px;
    margin-right: 6%;
}
h2{

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    color: #FFFFFF;
    margin-left: 3%;

}
`
const Registros = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 326px;
height: 446px;
background-color: #FFFFFF;
margin: 0 auto;
border-radius: 5px;
h2{
    width: 180px;
    height: 46px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
}
`
const Botoes = styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
margin-top: 3%;
button{
    width: 157px;
    height: 117px;
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    background: #A328D6;
    border-radius: 5px;
    border-style: none;
h3{
    width: 64px;
    height: 40px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;

}

}
`

const RegistroComDados = styled.div`
display: flex;
flex-direction:column;

width: 326px;
height: 446px;
background-color: #FFFFFF;
margin: 0 auto;
border-radius: 5px;



`

const Saldo = styled.div`
position: fixed;
width: 310px;
height: 30px;
background-color:   #FFFFFF;
display: flex;
margin-top: 97%;
padding-top: 3%;
justify-content: space-around;
h1{
  
width: 57px;
height: 20px;

font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
/* identical to box height */


color: #000000;
}

`
const SaldoTexto = styled.h2`
width: 62px;
height: 171px;


font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: right;
  color: ${props => props.cor};

`
const Dados = styled.div`
display: flex;
width: 310px;
background-color: #FFFFFF;
justify-content:space-around;
align-items: center;
margin-top: 5%;

`
const Valor = styled.h3`
 color :#03AC00;
`
const ValorSaida = styled.h3`

color :#C70000;
`
const Data = styled.h2`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #C6C6C6;
justify-content: flex-end;
display: flex;
align-items: center;
margin-right: 5%;

`

const Texto = styled.h1`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 15px;
margin-left: 3%;
color: #000000;


`


export{
    BodyRegistro,
    TopoRegistro,
    Registros,
    Botoes,
    RegistroComDados,
    Saldo,
    Dados,
    Valor,
    Data,
    Texto,
    ValorSaida,
    SaldoTexto

}