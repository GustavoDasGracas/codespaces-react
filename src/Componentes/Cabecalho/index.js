import Logotipo from "./Logotipo";
import Login from "./Login";
import Menu from "./Menu";
import styled from "styled-components";

const CabecalhoStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items:center;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    height: 10%;
`
const FaixaSuperior = styled.header`
    width: 100%;
    height: 100%;
    background-color: #FF1919;
 `
const FaixaInferior = styled.header`
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    height: 90%;
    font-size: 25px;
    padding-left: 5vw;
    background-color: #FFFFFF;

    p{
        margin-top: 5vh;

    }
 `

function Cabecalho() {
    return (
        <CabecalhoStyled>
            <FaixaSuperior>
                <Logotipo />
            </FaixaSuperior>

            <FaixaInferior>                
                <p>Sapopemba</p>
                <Menu />
                <Login />
            </FaixaInferior>

        </CabecalhoStyled>

    );
}

export default Cabecalho