import styled from "styled-components";

export const Container = styled.div`
    font-family: Poppins, Arial, sans-serif;
    background: #FFF9EB;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const SorteioConteudo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ParticipantesSelect = styled.select`
    padding: 0 20px;
    border-radius: 37.5px;
    height: 2rem;
    display: block;
    min-width: 300px;
    margin-top: 30px;
    @media screen and (min-width: 1024px) {
        width: 500px;
        height: 75px;
        font-size: 1.25rem;
    }
`

export const AvisoSeuNome = styled.p`
    margin-top: 10px;
    width: 274.5px;
    text-align: center;
    color: #444444;
`

export const Aviaozinho = styled.img`
    width: 130px;
    @media screen and (min-width: 1024px) {
        width: 200px;
        margin-top: 20px;
    }
`
export const AmigoSorteado = styled.p`
    margin-top: 5px;
    font-weight: bold;
    color: #FE652B;
    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
    }
`

export const SorteioContainer = styled.div`
    background: #FFF9EB;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`