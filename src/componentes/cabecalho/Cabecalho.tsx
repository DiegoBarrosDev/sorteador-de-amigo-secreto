import logo from '../../imagens/logo-pequeno.png'
import logoGrande from'../../imagens/logo.png'
import participante from '../../imagens/participante.png'
import { CabecalhoContainer, Imagem, Logo, LogoGrande } from './styles'

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <Logo src={logo} alt="" />
            <LogoGrande src={logoGrande} />
            <Imagem src={participante} alt="" />

        </CabecalhoContainer>
    )
}

export default Cabecalho