import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 40px 20px;
    background-color: #5561ac;
    color: #fff;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 3rem;
    max-width: 1100px;
    padding: 0 16px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    gap: 2rem;
    padding: 0 16px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        
    }

    @media (max-width: 564px) {
        grid-template-columns: 1fr;
    }
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
`;

export const Icon = styled.div`
    font-size: 2em;
    margin: 0 0 12px;
`;

export const Text = styled.p`
    font-size: 1em;
    line-height: 1.5;
    text-align: left;`;
