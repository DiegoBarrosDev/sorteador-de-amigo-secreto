import styled from 'styled-components'


export const CabecalhoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background: #4B69FD;
    width: 100%;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
        padding-top: 40px;
    }
`

export const Imagem = styled.img`
    width: 240px;
    z-index: 1;
    @media screen and (min-width: 1024px) {
        width: 450px;
    }
`
export const Logo = styled.img`
    width: 50%;
    @media screen and (min-width: 1024px) {
    display: none;
}
`

export const LogoGrande = styled.img`
    display: none;
    @media screen and (min-width: 1024px) {
    display: block;
    align-self: start;
}
`