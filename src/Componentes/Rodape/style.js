import styled from 'styled-components';

export const Footer = styled.footer`
  background: var(--primary, #e2e2e2); /* mesma cor do logo (usa variável se existir) */
  color: #fff;
  padding: 0.5rem 1rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
`;

export const Logo = styled.img`
  height: 86px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem; /* espaçamento de 1rem entre os ícones */
  margin-top: 0.5rem;
  color: #686868ff; /* ícones na cor branca */

    a {
        display: inline-flex;
        gap: 1rem;
        color: inherit; /* mantém a cor definida acima */
        text-decoration: none;
    }

  svg {
    display: block;
    color: currentColor; /* respeita a cor acima */
  }
`;

export const Copyright = styled.p`
  margin: 0.25rem 0 0 0;
  width: 395px;
  font-size: 0.95rem;
  color: #000; /* texto em preto */
`;

export const Developer = styled.span`
  color: var(--accent, #0b74de); /* WillDev em azul */
  font-weight: 700;
`;
