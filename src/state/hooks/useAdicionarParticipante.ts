import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    const lista = useRecoilValue(listaParticipantesState)
    const setErro =useSetRecoilState(erroState)
    return (nomeDoParticipante: string) => {
        if(lista.includes(nomeDoParticipante)){
            setErro('Este participante já está na lista.')
            setTimeout(()=> {
                setErro('')
            }, 3000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}