import React from 'react';
// Importa todos os styled-components definidos em './style' sob o namespace S (ex.: S.Container, S.Card)
import * as S from './style';
import { Briefcase, Easel, Pencil, PencilSquare } from 'react-bootstrap-icons';

// Declaração do componente funcional CardsServicos
const CardsServicos = () => {
  // Array de objetos que representam os cards que serão renderizados
  const cards = [
    {
      id: 1,
      // título/descrição principal do serviço
      title: 'Consultoria Empresarial',
      // cor usada para o ícone e borda do círculo (azul)
      color: '#0b74de',
      // JSX do ícone — maleta do Bootstrap Icons (componente)
      icon: (
        <Briefcase aria-hidden />
      ),
    },
    {
      id: 3, // terceiro card
      title: 'Treinamentos e Palestras', // título do serviço
      color: '#7be495', // cor verde claro para o ícone/borda
      icon: (
        <PencilSquare aria-hidden />
      ),
    },
    {
      id: 4, // quarto card
      title: 'Desenvolvimento Profissional', // título do serviço
      color: '#0f9d58', // cor verde escuro para o ícone/borda
      icon: (
        <Easel aria-hidden />
      ),
    },
  ];

  // Função que abre o WhatsApp com a mensagem pré-definida
  const handleClick = (messageTitle) => {
    const message = `Olá, gostaria de saber mais sobre seus serviços de ${messageTitle}!`;
    const encodedMessage = encodeURIComponent(message);
    
    // Abre o WhatsApp com a mensagem pré-definida
    window.open(`https://wa.me/5527997916541?text=${encodedMessage}`, '_blank');
  };

  // Retorna o JSX que será renderizado na tela
  return (
    // Componente styled que envolve toda a seção de serviços
    <S.Container id='servicos'>
      {/* Título da seção */}
      <S.Title>Nossos Serviços</S.Title>

      {/* Grade responsiva que organiza os cards */}
      <S.Grid>
        {/* Percorre o array 'cards' e cria um card para cada item */}
        {cards.map(card => (
          // Cada S.Card tem uma key (necessária para listas no React), é focável e usa aria-labelledby para acessibilidade
          <S.Card key={card.id} tabIndex={0} aria-labelledby={`card-title-${card.id}`}>
            {/* Envolve o ícone em um círculo; a cor é passada via style inline (borderColor e color) */}
            <S.IconWrap style={{ borderColor: card.color, color: card.color }} aria-hidden>
              {/* Ícone SVG já definido dentro do objeto 'card' */}
              {card.icon}
            </S.IconWrap>

            {/* Título do card — o id corresponde ao aria-labelledby acima */}
            <S.CardTitle id={`card-title-${card.id}`}>{card.title}</S.CardTitle>


            {/* Botão de ação do card */}
            <S.CardButton 
            type="button" 
            onClick={() => handleClick(card.title)}
            aria-label="Saiba mais sobre este serviço"
            >Saiba Mais...</S.CardButton>    
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  );
};

// Exporta o componente para que possa ser importado e usado em outras partes da aplicação
export default CardsServicos;
