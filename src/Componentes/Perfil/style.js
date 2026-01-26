// ...existing code...
import styled from "styled-components";
import FundoImg from "../../assets/perfil-1.jpeg"

export const Wrapper = styled.main`
    display: flex;
    position: relative;
    flex-direction: column;
    background-image: url(${FundoImg});
    background-size: cover;
    background-repeat: no-repeat;

        &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
    }


    @media (max-width: 516px) {
        background-position: right;
    }
`;  

export const Section = styled.section`
    min-height: 75vh;
    display: flex;
    align-items: center;
    margin-left: 10rem;
    padding-left: 3rem ;
    gap: 2rem;
    

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding-left: 0;
        margin-left: 0;
    }

    @media (max-width: 516px) {
        padding: 1rem;
        justify-content: center;
        align-items: center;
        text-align: start;
    }
`;

export const Content = styled.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    z-index: 5;
    gap: 12px;
    color: #fff;

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
    margin: 0;
    line-height: 1.5;
    font-size: 1.1em;
    max-width: 440px;
    
    @media (max-width: 768px) {
        font-size: 1em;
    }
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