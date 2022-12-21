import { useState } from "react"
import { Reset } from "styled-reset"
import Cabecalho from "../componentes/cabecalho/Cabecalho"
import { FormularioContainer, Titulo } from "../componentes/formulario/styles"
import { RodapeBotao } from "../componentes/rodape/styles"
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"
import { AmigoSorteado, Aviaozinho, AvisoSeuNome, Container, ParticipantesSelect, SorteioContainer, SorteioConteudo } from "./styles"
import aviaozinho from "../imagens/aviao.png"

export const Sorteio = () => {
    const participantes = useListaParticipantes()
    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
            setTimeout(()=> {
                setAmigoSecreto('')
            }, 5000)
        }

    }
    return (
        <Container>
            <Reset />
            <Cabecalho />
            <FormularioContainer>
                <Titulo>Quem vai tirar o papelzinho?</Titulo>
                <SorteioConteudo onSubmit={sortear}>
                    <ParticipantesSelect required name="participanteDaVez" id="participanteDaVez" placeholder="Selecione o seu nome"
                        value={participanteDaVez}
                        onChange={evento => setParticipanteDaVez(evento.target.value)}
                    >
                        <option>Selecione o seu nome</option>
                        {participantes.map(participante => <option key={participante}>{participante}</option>)}
                    </ParticipantesSelect>
                    <AvisoSeuNome>Clique em sortear para ver quem é seu amigo secreto!</AvisoSeuNome>
                    <RodapeBotao>Sortear</RodapeBotao>
                </SorteioConteudo>
            </FormularioContainer>
            <SorteioContainer>

                {amigoSecreto && <AmigoSorteado role='alert'>{amigoSecreto}</AmigoSorteado>}
                <Aviaozinho src={aviaozinho} />
            </SorteioContainer>
        </Container>
    )
}