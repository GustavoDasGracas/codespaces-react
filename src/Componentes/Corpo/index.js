// import SecaoPricipal from"./SecaoPrincipal";
// import BarraNavegacao from"./BarraNavegacao";
import styled from"styled-components";

const CorpoStyled = styled.div`
    display: flex;         
    width: 100vw;       
    height: 85vh;           
`

function Corpo(){
    return(
    <CorpoStyled>
        {/* <SecaoPricipal/> */}
        {/* <BarraNavegacao/> */}
    </CorpoStyled>

    );
}

export default Corpo;