import './App.css';
import Logotipo from './componentes/Logotipo';
import Menu from './componentes/Menu';
import Login from './componentes/Login';
import Cabecalho from './componentes/Cabeçalho';

function App() {
  return (
    <div className="App">
        <Cabecalho/>
      
      <section className="Corpo">
       <nav className="Lateral">
        <ul className="Menu-Lateral">
          <li className="Menu-Lateral">Cursos Gratuitos</li>
          <li className="Menu-Lateral">Cursos Tecnicos</li>
          <li className="Menu-Lateral">Unidades</li>
          <li className="Menu-Lateral">Fale Conosco</li>
          <li className="Menu-Lateral">Fale Conosco</li>
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
