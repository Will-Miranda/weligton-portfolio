import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(180deg, #707066 0%, #707070 100%);
  color: #fff;
  padding: 3rem 1rem;
`;

export const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-align: center;
  padding: 1.5rem 0;
`;

export const Description = styled.p`
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  color: rgba(255,255,255,0.95);
  font-size: 1.2rem;
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Feature = styled.article`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 10px;
  
`;

export const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff; /* círculo branco com ícone branco */
  color: #fff;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const FeatureTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  text-align: center;
  color: #fff;
`;
