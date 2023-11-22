import styled from 'styled-components';
import logo from '../../../imagens/SENAI_São_Paulo_logo.png';

const AppLogotipo = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1vw;
    margin: 1vw;
    font-size: 20px;
    
    img{ 
        width:15vw;
        font-size: center;
        padding-bottom: 1vw;
    }
`
function Logotipo( ){
    return(
        <AppLogotipo>
            <img src={logo} classname="App-Logo" alt="Logo"/>
        </AppLogotipo>
    );
}

export default Logotipo


