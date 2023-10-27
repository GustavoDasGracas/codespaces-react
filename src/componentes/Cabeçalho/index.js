import Logotipo from "../Logotipo";
import Login from "../Login";
import Menu from "../Menu";
function Cabecalho (){
    return(
     <>
    <header className="App-header">
        <Logotipo/>
        <Menu/>
        <Login/>
    </header>
    </>
    );
}

export default Cabecalho