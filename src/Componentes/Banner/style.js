import styled from "styled-components";
import FundoApr from "../../assets/fundo-perfil.png";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${FundoApr});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 70vh;
`;

export const SectionPresentation = styled.section`
    display: flex;
    text-align: center;
    align-items: center;
`

export const Content = styled.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    margin-right: 6.3rem;
    gap: 12px;
    color: #000;

`;

export const Title = styled.h3`
    margin-bottom: 1.2rem;
    font-size: 2em;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.3em;
    }
`;

export const Text = styled.p`
    line-height: 1.5;
    font-size: 1.1em;
    max-width: 720px;
    
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

