import './App.css';
import logo from './imagens/SENAI_São_Paulo_logo.png';

import login from './imagens/imagemlogin.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} classname="App-Logo" alt="Logo"></img>
        <p>"Anchieta"</p>

        <ul className="Header-Menu">
          <li className="Menu">Home </li>
          <li className="Menu">Cursos</li>
          <li className="menu">Turmas</li>
        </ul>

        <p>Fazer Login</p>
        <img src={login} classname='Login' alt="login"/>
       </header>

      <section className="Corpo">
       <nav className="Lateral">
        <ul className="Menu-Lateral">
          <li className="Menu-Lateral">Cursos Gratuitos</li>
          <li className="Menu-Lateral">Cursos Tecnicos</li>
          <li className="Menu-Lateral">Unidades</li>
          <li className="Menu-Lateral">Fale Conosco</li>
          <li className="Menu-Lateral">Fale Conosco</ui>
        </ul>
       </nav>

       <article className="Pricipal">
        <h1>Vestibular 2024</h1>
        <p>Inscrições Abertas Na</p>
        <h3>Faculdade De Indústrias</h3>
        <p>03/10 a 04/12</p><br></br>

        <h1>Cursos</h1>
        <p>Pesquisar Todos</p>
        <p>Administração e Gestão</p>
        <p>Alimentos e Bebidas</p>
       </article>
      </section>

    </div>
  );
}

export default App;
