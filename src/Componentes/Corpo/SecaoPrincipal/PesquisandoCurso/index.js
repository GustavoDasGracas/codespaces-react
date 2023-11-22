import styled from "styled-components"
import { cursos } from "./dados";
import { useState } from "react";

const PesquisaCursoStyled = styled.styled.div`

`
const Input = styled.input`

`
const CardCurso = styled.div`
    display: flex;
    align-items: center;

`
const CardIfoCurso = styled.div`

`
function PequisaCurso(){

    const [cursosEcontrados, setCursosEcontrados] = useState([])

    return(

        <PesquisaCursoStyled>
            <h1>Pesquisar Curso</h1>
            <Input
                onChange = {
                    evento =>{
                        const textoDigitado = evento.target.value;
                        const resultadoBusca = cursos.filter( cursos.título.includes(textoDigitado))
                        setCursosEcontrados(resultadoBusca)
                    }
                }
            />
            
            {  
                cursosEcontrados.map(cursos=> (
                    <CardCurso>
                        <img src={cursos.imagem} alt=""/>
                        <div>
                            <h2>{cursos.título}</h2>
                            <h3>{cursos.cargaHorária}</h3>
                            <h3>{cursos.área}</h3>
                        </div>
                        <CardIfoCurso>

                        </CardIfoCurso>
                    </CardCurso>
                )) 
            }
        </PesquisaCursoStyled>

     )          
    
}

export default PequisaCurso;