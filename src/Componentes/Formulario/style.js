import styled from 'styled-components';

export const Section = styled.section`
  background: #f2f2f2;
`;

export const Container = styled.div`
  max-width: 880px;
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  width: 330px;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  width: 330px;
  text-align: center;
  margin: 0;
  color: var(--text, #111);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: var(--muted, #555);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  font-size: 0.95rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  font-size: 0.95rem;
  resize: vertical;
`;

export const HelpText = styled.small`
  color: var(--muted, #666);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

export const Button = styled.button`
  margin-top: 0.25rem;
  padding: 0.6rem 0.75rem;
  background: var(--primary, #0b74de);
  color: #fff;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.12s ease, background 0.12s ease;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    background: #095bb7;
    outline: none;
  }
`;

export const WhatsappLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  color: #25D366;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: #128C7E;
  }

`;
