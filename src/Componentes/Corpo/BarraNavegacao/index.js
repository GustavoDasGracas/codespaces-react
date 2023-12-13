import styled1 from 'styled-components'; 
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

const Navegacao = styled1.nav`
    display: flex;
    width: 20vw;   
    min-height: 85vh;                                  
    background-color: #f5f5f5; 
    flex-direction: column;
    gap: 3vh;
    padding-top: 3vh;
    padding: 2vh;
    color: black;
    font-size: 18px;
`

const ColorButton =  styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "red",
    '&:hover': {
      backgroundColor: "red",
    },
  }));

function BarraNavegacao (){
    return(
            <Navegacao>
                 <GlobalStyles styles={{ Button: { color: 'grey' } }} />
                <Stack spacing={2} direction="column">
                    <ColorButton variant="contained">Atividades</ColorButton>
                    <Button>Para Você</Button>
                    <Button>Unidades</Button>
                    <Button>Indústria</Button>
                    <Button>Cultura</Button>
                    <Button>Educação</Button>   
                    <Button>Esportes</Button>
                    <Button >Eventos</Button>
                    <Button>Destaques</Button>
                    <Button>Central de Contato</Button><br></br>
                    <p><ins>EDIFÍCIO SEDE FIESP<br></br>
                        Av. Paulista, 1313,<br></br> 
                        <small>São Paulo/SP CEP 01311-923</small></ins></p>
                </Stack>
            </Navegacao>  

    );
}

export default BarraNavegacao