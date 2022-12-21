import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import { Participante } from "./styles"

 const ListaParticipantes = () => {
    const participantes: string[] = useListaParticipantes()

    return (
        <ul>
            {participantes.map(participante => <Participante key={participante}>{participante}</Participante>)}
        </ul>
    )
}

export default ListaParticipantes