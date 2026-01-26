import React from 'react';
import * as S from './style';
import { Briefcase, Easel, PencilSquare } from 'react-bootstrap-icons';
import { dadosServicos, dadosContato } from '../../data';

const iconMap = {
  Briefcase,
  Easel,
  PencilSquare
};

const CardsServicos = () => {
  const handleClick = (messageTitle) => {
    const message = `Olá, gostaria de saber mais sobre seus serviços de ${messageTitle}!`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${dadosContato.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  return (
    <S.Container id='servicos'>
      <S.Title>Nossos Serviços</S.Title>

      <S.Grid>
        {dadosServicos.map(card => {
          const IconComponent = iconMap[card.icon];
          return (
            <S.Card key={card.id} tabIndex={0} aria-labelledby={`card-title-${card.id}`}>
              <S.IconWrap style={{ borderColor: card.color, color: card.color }} aria-hidden>
                <IconComponent />
              </S.IconWrap>

              <S.CardTitle id={`card-title-${card.id}`}>{card.title}</S.CardTitle>

              <S.CardButton 
                type="button" 
                onClick={() => handleClick(card.title)}
                aria-label="Saiba mais sobre este serviço"
              >
                Saiba Mais...
              </S.CardButton>    
            </S.Card>
          );
        })}
      </S.Grid>
    </S.Container>
  );
};

// Exporta o componente para que possa ser importado e usado em outras partes da aplicação
export default CardsServicos;
