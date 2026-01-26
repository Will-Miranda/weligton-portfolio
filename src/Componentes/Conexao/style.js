import styled from "styled-components";

// CONTAINER: Container principal do componente
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 5rem 2rem;
    background-color: #fff;
`;

// TÍTULO: Título principal do componente
export const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: #222;
`;

// DESCRIÇÃO: Subtítulo descritivo
export const Description = styled.p`
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: #666;
`;

// CARROSSEL CONTAINER: Container que inclui botões e carrossel
export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    position: relative;
`;

// BOTÃO NAVEGAÇÃO: Botões de navegação esquerda/direita
export const NavButton = styled.button`
    // POSIÇÃO: Posicionamento absoluto baseado na direção
    position: ${props => props.direction === 'left' ? 'absolute' : 'absolute'};
    ${props => props.direction === 'left' ? 'left: -60px;' : 'right: -60px;'}
    
    // ESTILO: Aparência do botão
    background: rgba(99, 99, 99, 0.61);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    // HOVER: Efeitos ao passar o mouse
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
    
    // ACTIVE: Efeito ao clicar
    &:active {
        transform: scale(0.95);
    }
    
    // RESPONSIVO: Ajustes para telas menores
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        ${props => props.direction === 'left' ? 'left: -45px;' : 'right: -45px;'}
    }
    
    @media (max-width: 480px) {
        width: 35px;
        height: 35px;
        ${props => props.direction === 'left' ? 'left: -35px;' : 'right: -35px;'}
    }
`;

// CARROSSEL INFINITO: Container principal do carrossel com overflow
export const InfiniteCarousel = styled.div`
    width: 100%;
    max-width: 1000px;
    overflow: hidden;
    position: relative;
    margin: 2rem 0;
    border-radius: 12px;
`;

// TRILHA DO CARROSSEL: Elemento que se move para criar o efeito de deslizamento
export const CarouselTrack = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-${props => props.position * 220}px);
    
    // RESPONSIVO: Ajuste do movimento baseado no tamanho da tela
    @media (max-width: 1024px) {
        transform: translateX(-${props => props.position * 260}px);
    }
    
    @media (max-width: 768px) {
        transform: translateX(-${props => props.position * 180}px);
    }
    
    @media (max-width: 600px) {
        transform: translateX(-${props => props.position * 160}px);
    }
    
    @media (max-width: 480px) {
        transform: translateX(-${props => props.position * 140}px);
    }
`;

// CARD: Container individual para cada logo
export const Card = styled.div`
    // LAYOUT: Flexbox centralizado
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    // DIMENSÕES: Tamanho mínimo e espaçamento
    min-width: 180px;
    margin: 0 10px;
    padding: 1.5rem;
    
    // APARÊNCIA: Visual moderno com sombras
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    // HOVER: Efeito de elevação ao passar o mouse
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    // RESPONSIVO: Ajustes para diferentes tamanhos de tela
    @media (max-width: 1024px) {
        min-width: 220px;
        margin: 0 10px;
    }
    
    @media (max-width: 768px) {
        min-width: 140px;
        margin: 0 8px;
        padding: 1rem;
    }
    
    @media (max-width: 600px) {
        min-width: 120px;
        margin: 0 5px;
        padding: 1rem;
    }
    
    @media (max-width: 480px) {
        min-width: 100px;
        margin: 0 2px;
        padding: 0.8rem;
    }
`;

// LOGO: Imagem do logo do cliente
export const Logo = styled.img`
    // DIMENSÕES: Tamanho fixo para consistência
    width: 120px;
    height: 60px;
    object-fit: contain;
    transition: transform 0.3s ease;
    
    // HOVER: Efeito de zoom sutil ao passar o mouse
    &:hover {
        transform: scale(1.05);
    }
    
    // RESPONSIVO: Ajuste para telas menores
    @media (max-width: 768px) {
        width: 90px;
        height: 45px;
    }
    
    @media (max-width: 600px) {
        width: 70px;
        height: 35px;
    }
    
    @media (max-width: 480px) {
        width: 50px;
        height: 25px;
    }
`;

// NOME DO CARD: Título para o nome do cliente (não utilizado atualmente)
export const CardName = styled.h3`
    font-size: 1.2rem;
    color: #222;
    margin-bottom: 0.5rem;
`;

// INDICADORES: Container para os pontos indicadores de posição
export const Indicators = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

// PONTO INDICADOR: Indicador individual de posição
export const Dot = styled.button`
    // APARÊNCIA: Estilo base do ponto
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: ${props => props.$isActive ? '#5561ac' : '#ccc'};
    transition: all 0.3s ease;
    
    // TAMANHO: Maior quando ativo
    ${props => props.$isActive && `
        width: 14px;
        height: 14px;
        transform: scale(1.2);
    `}
    
    // HOVER: Efeito ao passar o mouse
    &:hover {
        background-color: ${props => props.$isActive ? '#5561ac' : '#999'};
        transform: ${props => props.$isActive ? 'scale(1.2)' : 'scale(1.1)'};
    }
    
    // FOCUS: Estilo para acessibilidade
    &:focus {
        outline: 2px solid #5561ac;
        outline-offset: 2px;
    }
`;

