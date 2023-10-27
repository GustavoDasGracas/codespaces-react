import './estilo.css'
import login from '../../imagens/imagemlogin.jpg'

function Login (){
    return(
        <>
        <p>Fazer Login</p>
        <img src={login} classname='Login' alt="login"/>
        </>
    );
}

export default Login