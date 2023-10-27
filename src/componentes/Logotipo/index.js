import './estilo.css'
import logo from '../../imagens/SENAI_São_Paulo_logo.png';


function Logotipo( ){
    return(
        <>
        <img src={logo} classname="App-Logo" alt="Logo"></img>
        <p>"Anchieta"</p>
        </>
    );
}

export default Logotipo


