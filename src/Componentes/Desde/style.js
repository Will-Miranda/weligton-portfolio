import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 20px;
    background-color: #5561ac;
    color: #fff;
    text-align: center;
    width: 100%;
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
    }
`;

export const Title = styled.h1`
    width: 800px;
    text-align: start;
    margin: 0 auto;
    font-size: 2em;
    font-weight: bold;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
`;

export const Icon = styled.div`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const Number = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
`;

export const Description = styled.p`
    font-size: 1.2rem;
`;