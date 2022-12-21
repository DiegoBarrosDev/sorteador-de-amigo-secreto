import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import { RodapeBotao, RodapeContainer, Sacolas } from "./styles"
import sacolas from "../../imagens/sacolas.png"
import { useSorteador } from "../../state/hooks/useSorteador"

export const Rodape = () => {
    const participantes = useListaParticipantes()
    const navegarPara = useNavigate()
    
    const sortear = useSorteador()
    
    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    
    return (
        <RodapeContainer>
            <RodapeBotao disabled={participantes.length < 3}onClick={iniciar}>Iniciar brincadeira</RodapeBotao>
            <Sacolas src={sacolas} alt="" />
        </RodapeContainer>
    )
}

