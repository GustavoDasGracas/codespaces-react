import styled from 'styled-components';
const listaMenu = ["Home", "Cursos", "Turmas","Sobre Nós"];

const MenuCabecalho = styled.ul`
  display: flex;
  gap:8vw;
  margin-top: 5vh;
  margin-left: 5vh;
  margin-right: 5vw;
    .Menu-item{
      display: flex;
      background-color: white;
    }    
  align-items:center;
  justify-content: center;
`

const ItemMenu = styled.li`
  list-style: none;
  font-size: calc(10px + 1vw);
`

function Menu() {
  return (
    <MenuCabecalho>
      {
        listaMenu.map((item) => (
          <ItemMenu>{item}</ItemMenu>
        ))}
    </MenuCabecalho>
  );
}

export default Menu