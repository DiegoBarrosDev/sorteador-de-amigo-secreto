import styled from "styled-components";


export const RodapeContainer = styled.footer`
    background: #FFF9EB;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

export const RodapeBotao = styled.button`
    margin-top: 15px;
    margin-bottom: 5px;
    height: 2rem;
    background: rgba(254, 101, 43, 0.99);
    mix-blend-mode: normal;
    border: 1px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 37.5px;
    color: #fff;
    width: 160px;
    @media screen and (min-width: 1024px) {
        width: 350px;
        height: 80px;
        font-size: 1.25rem;
    }
`

export const Sacolas = styled.img`
    width: 130px;
    @media screen and (min-width: 1024px) {
        width: 240px;
    }
`