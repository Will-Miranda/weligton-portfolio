import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  background: var(--background, #ffffff);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.img`
  height: 85px;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: 0;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  cursor: pointer;
  span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text, #111);
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  &[aria-expanded='true'] span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  &[aria-expanded='true'] span:nth-child(2) {
    opacity: 0;
  }
  &[aria-expanded='true'] span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
`;

export const NavItens = styled.nav`
  display: flex;
  align-items: center;

  /* aplica apenas ao item 'conversa' */
li[data-id="conversa"] a {
  color: var(--primary, #1582eeff);
  font-weight: 600;
}

/* preserva estado de foco/hover */
li[data-id="conversa"] a:hover,
li[data-id="conversa"] a:focus {
  color: #044c95ff;
  outline: none;
}

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--background, #fff);
    max-height: ${props => (props.open ? '320px' : '0')};
    overflow: hidden;
    transition: max-height 0.35s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li a {
    text-decoration: none;
    color: var(--text, #111);
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    transition: color 0.15s ease, transform 0.15s ease;
  }

  li a:hover {
    color: var(--primary, #0b74de);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 2rem;
    li {
      padding: 0.5rem 0;
    }
  }
`;