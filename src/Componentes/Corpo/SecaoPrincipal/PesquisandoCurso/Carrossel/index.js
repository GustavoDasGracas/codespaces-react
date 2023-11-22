import { Carousel } from "react-bootstrap";
import { CarouselItem } from "react-bootstrap";
import styled from "styled-components";
import AnimaçõesDesign from '../../../../../imagens/AnimaçõesDesign.jpg';
import Desenvolvimentoaplicativos from '../../../../../imagens/desenvolvimento-de-aplicativos.jpg';
import Desenvolvimentoweb from '../../../../../imagens/desenvolvimentoweb.jpg';


const CarrosselStyled = styled(Carousel)`
    margin-top: 20px;
    overflow: hidden;
    height: 60vh;
    width: 50vw;
    img{
        object-fit: cover;
    }
`

function CarrosselFotos(){
    return(
        <CarrosselStyled>
                <CarouselItem>
                    <img
                    className="d-block w-100"
                    src={AnimaçõesDesign}
                    alt=""
                    />
                </CarouselItem>
                <CarouselItem>
                    <img 
                    className="d-block w-100"
                    src={Desenvolvimentoaplicativos}
                    alt=""
                    />
                </CarouselItem>
                <CarouselItem>
                    <img 
                    className="d-block w-100"
                    src={Desenvolvimentoweb}
                    alt=""
                    />
                </CarouselItem>
        </CarrosselStyled>
    );
}

export default CarrosselFotos; 