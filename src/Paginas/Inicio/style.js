// ...existing code...
import styled, { keyframes } from "styled-components";
import FundoApr from "../../assets/fundo-perfil.png"

const float = keyframes`
    0%{ transform: translateY(0); }
    50%{ transform: translateY(-6px); }
    100%{ transform: translateY(0); }
`;

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

export const SectionPresentation = styled.section`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: end;
    padding-right: 4rem;
    background-image: url(${FundoApr});
    background-size: fill;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 70vh;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 7rem;
    gap: 28px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const ImageWrapper = styled.figure`
    width: 320px;
    max-width: 40%;
    perspective: 1000px; /* Cria sensação 3D */
    justify-content: flex-end;

    @media (max-width: 768px) {
        width: 220px;
        max-width: 80%;
        margin: 0 auto;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 80%;
    display: block;
    transform-style: preserve-3d;
    animation: ${float} 3s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        transition: none;
    }
`;

export const Content = styled.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #000;
`;

export const Title = styled.h3`
    margin-bottom: 1.2rem;
    font-size: 2em;
    font-weight: 700;
`;

export const Text = styled.p`
    margin: 0;
    line-height: 1.5;
    font-size: 1.1em;
`;

export const Button = styled.button`
    margin-top: 14px;
    width: fit-content;
    background: #0d6efd;
    color: #fff;
    border: none;
    padding: 10px 16px;
    cursor: pointer;
    transition: background 180ms;

    &:hover { background: #084fca; }
`;