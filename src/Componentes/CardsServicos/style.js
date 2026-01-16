import styled from 'styled-components';

export const Container = styled.section`
  padding: 3rem 6rem 5.5rem 6rem;
  margin: 0 auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text, #111);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  background: var(--card-bg, #ffffff87);
  border-radius: 12px;
  padding: 2.85rem;
  box-shadow: 0 8px 20px rgba(10, 10, 10, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* Centraliza ícone e conteúdo horizontalmente */
  align-items: center;
  /* Garante que textos fiquem centralizados dentro do card */
  text-align: center;
  cursor: default;

  &:hover,
  &:focus {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
    outline: none;
  }
`;

export const IconWrap = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid currentColor;
  color: var(--icon-color, #0b74de);
  margin-bottom: 0.5rem;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-top: 0.25rem;
  font-size: 1.125rem;
  color: var(--text, #111);
  /* centraliza o título quando o card estiver alinhado ao centro */
  text-align: center;
`;


export const CardButton = styled.button`
  margin-top: auto;
  align-self: stretch;
  padding: 0.75rem 1rem;
  background: transparent;
  border: 1px solid var(--primary, #0b74de);
  color: var(--primary, #0b74de);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease, transform 0.12s ease;

  &:hover{
    background: var(--primary, #0b74de);
    color: #fff;
    transform: translateY(-2px);
  }
`;
