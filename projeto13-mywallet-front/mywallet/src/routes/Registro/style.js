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
button{
    width: 155px;
    height: 114px;
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

export{
    BodyRegistro,
    TopoRegistro,
    Registros,
    Botoes,

}