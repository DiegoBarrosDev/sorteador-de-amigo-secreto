import styled from "styled-components";

export const FormularioContainer = styled.div`
    background: #FFF9EB;
    width: 100%;
    margin-top: -37px;
    border-radius: 30px 30px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid black;
    padding-top: 30px;
    @media screen and (min-width: 1024px) {
        margin-top: -52px;
        padding-top: 60px;
    }
`

export const Titulo = styled.h1`
    color: #4B69FD;
    font-family: Poppins, Arial, sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
    }
`
export const Input = styled.input`
    padding: 0 20px;
    border-radius: 37.5px;
    height: 2rem;
    display: block;
    min-width: 280px;
    margin-top: 20px;
    @media screen and (min-width: 1024px) {
        width: 500px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: 1px solid #000000;
        box-shadow: 2px 2px 0px #000000;
        margin-top: 15px;
        height: 82px;
        font-size: 1.25rem;
    }
`

export const FormularioConteudo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`

export const FormularioBotao = styled.button`
    margin-top: 15px;
    margin-bottom: 5px; 
    height: 2rem;
    background: #C4C4C4;
    color: #000;
    width: 160px;
    border: 1px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 37.5px;
    @media screen and (min-width: 1024px) {
        width: 220px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-top: 20px;
        height: 84px;
        font-size: 1.25rem;
    }
`

