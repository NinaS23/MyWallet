import styled from "styled-components"

const BodyEntrada = styled.div`
justify-content: center;
align-items: center;

`
const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input{
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 3%;
    border-style: none;

}
button{
         margin-top: 15px;
         background-color: #A328D6;
         border-style: none;
         width: 326px;
         height: 46px;
         margin-top: 3%;
         display: flex;
         justify-content: center;
         align-items: center;
    }
`
const TituloEntrada = styled.h1`

width: 168px;
height: 31px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 31px;
color: #FFFFFF;
margin-top: 5%;
margin-bottom: 7%;
margin-left: 6.25%;

`
const Salvar = styled.h3`
position: absolute;
width: 140px;
height: 23px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;

`


export{
Salvar,
Div,
TituloEntrada,
BodyEntrada
}