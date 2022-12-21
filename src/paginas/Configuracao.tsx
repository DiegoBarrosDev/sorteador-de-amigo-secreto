import { Reset } from "styled-reset"
import Cabecalho from "../componentes/cabecalho/Cabecalho"
import Formulario from "../componentes/formulario/Formulario"
import ListaParticipantes from "../componentes/listaDeParticipantes/ListaParticipantes"
import { Rodape } from "../componentes/rodape/Rodape"
import { Container } from "./styles"


export const Configuracao = () => {
    return (
        <Container>
            <Reset />
            <Cabecalho />
            <Formulario />
            <ListaParticipantes />
            <Rodape />
        </Container>
    )
}