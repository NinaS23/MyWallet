
import styled from "styled-components"

const Body = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin-top: 50%;
    h1{
        font-family:"Saira Stencil One";
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 18px;
        color: #FFFFFF;
        width: 147px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div{
        flex-direction: column;
        display: flex;
        margin-top: 10px;
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
    h4{
         margin-top: 25px;
         color: #FFFFFF;
         width: 191px;
         height: 18px;
         font-family: 'Raleway';
         font-style: normal;
         font-weight: 700;
         font-size: 15px;
         line-height: 18px;
    }
`
const Input = styled.input`
    width: 110px;
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border-style: none;
    margin-top: 4.5%;
`
const Entrar = styled.h3`
width: 59px;
height: 23px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;

color: #FFFFFF
`
export{
    Body,
    Input,
    Entrar
    
}