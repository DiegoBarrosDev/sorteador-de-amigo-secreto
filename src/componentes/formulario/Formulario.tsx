import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro"
import {  FormularioBotao, FormularioContainer, FormularioConteudo, Input, Titulo } from "./styles"

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }
    
    return (

        <FormularioContainer>
            <Titulo>Vamos começar!</Titulo>
            <FormularioConteudo onSubmit={adicionarParticipante}>
                <Input 
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text" placeholder="Insira os nomes dos participantes" />
                <FormularioBotao disabled={!nome}>Adicionar</FormularioBotao>
            </FormularioConteudo>
                {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
        </FormularioContainer>
    )
}

export default Formulario