import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 5rem 2rem;
    background-color: #fff;
`;

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: #222;
`;

export const Description = styled.p`
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: #666;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1100px;
    gap: 1.2rem;
`;

export const CarouselButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #5561ac;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(85, 97, 172, 0.1);
    }
`;

export const CarouselContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`; 

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
    width: 150px;
    margin-bottom: 1rem;
    height: 80px;
    object-fit: contain;
`;

export const CardName = styled.h3`
    font-size: 1.2rem;
    color: #222;
    margin-bottom: 0.5rem;
`; 

export const Indicators = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Dot = styled.button`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ccc;
    border: none;
    cursor: pointer;

    &.active {
        background-color: #5561ac;
    }
`;