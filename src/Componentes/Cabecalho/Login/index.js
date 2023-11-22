import styled from 'styled-components';
import login from '../../../imagens/imagemlogin.png';
import lupa from '../../../imagens/lupa.png';
const listaIcone = [login, lupa];

const LoginStyled = styled.div`
    display: flex;
    gap:5vw;
    padding-right: 5vw;
    img{
        width: 3vw;
    }
`

function Login (){
    return(
        <LoginStyled>
            {listaIcone.map((icone)=>(
                <img src={icone} classname="icone" alt="icone"/>
            ))}
        </LoginStyled>
    );
}

export default Login