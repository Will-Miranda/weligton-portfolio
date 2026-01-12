// ...existing code...
import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    background:  #c3c3cdba;

`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10rem;
    padding-left: 3rem ;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding-left: 0;
        margin-left: 0;
    }
`;

export const ImageWrapper = styled.figure`
    width: 500px;

    @media (max-width: 768px) {
        width: 220px;
        max-width: 100%;
        margin: 0 auto;
    }
`;

export const Image = styled.img`
    width: 100%;
        display: block;

    @media (max-width: 768px) {
        transform: none;
    }
`;

export const Content = styled.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
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