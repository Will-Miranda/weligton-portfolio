import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 3rem 2rem;
    background-color: #f2f2f2;
`;

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2rem;
    color: #222;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 800px;
`;

export const CarouselButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #5561ac;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(85, 97, 172, 0.1);
    }
`;

export const CarouselContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const DepoimentoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    padding-top: 70px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
    max-width: 350px;
    width: 100%;
    position: relative;
`;

export const Foto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const Texto = styled.p`
    font-style: italic;
    margin: 10px 0;
`;

export const Nome = styled.h3`
    margin: 10px 0 5px;
    color: #222;
`;

export const Cargo = styled.p`
    color: #666;
    margin: 0 0 10px;
`;

export const Indicators = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 20px;
`;

export const Dot = styled.button`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: ${props => props.isActive ? "#5561ac" : "#ccc"};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5561ac;
    }
`;