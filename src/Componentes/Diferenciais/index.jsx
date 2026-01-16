import React from 'react';
import * as S from './style';
import { AlarmFill, Clock, Crosshair, Crosshair2, Display, People, PersonVcardFill } from 'react-bootstrap-icons';

const Diferenciais = () => {
  const items = [
    {
      id: 1,
      title: 'Expertise e Experiência',
      // Ícone: relógio
      icon: (
        <AlarmFill aria-hidden />
      ),
    },
    {
      id: 2,
      title: 'Tecnologia Avançada',
      // Ícone: estilo CNH / cartão
      icon: (
        <PersonVcardFill aria-hidden />
      ),
    },
    {
      id: 3,
      title: 'Foco no Cliente',
      // Ícone: mira / alvo
      icon: (
        <Crosshair2 aria-hidden />
      ),
    },
    {
      id: 4,
      title: 'Inovação Contínua',
      // Ícone: monitor com quadrado dentro
      icon: (
        <Display aria-hidden />
      ),
    },
    {
      id: 5,
      title: 'Gestão Estratégica de Pessoas',
      // Ícone: perfil
      icon: (
        <People aria-hidden />
      ),
    },
  ];

  return (
    <S.Section>
      <S.Inner>
        <S.Title>Diferenciais</S.Title>
        <S.Description>
          A WM é uma empresa de consultoria formada por um profissional altamente experiente, o que garante uma atuação sólida, objetiva e com
          uma visão ampla para identificar as necessidades reais do seu negócio. Nosso compromisso é entregar soluções estratégicas, inovadoras e
          realmente eficazes sempre indo além do esperado. Trabalha para transformar a gestão de pessoas em uma força competitiva, capaz de
          impulsionar resultados e fortalecer a performance das organizações que confiam em nosso trabalho.
        </S.Description>

        <S.Features>
          {items.map(item => (
            <S.Feature key={item.id} tabIndex={0} aria-label={item.title}>
              <S.IconCircle aria-hidden>{item.icon}</S.IconCircle>
              <S.FeatureTitle>{item.title}</S.FeatureTitle>
            </S.Feature>
          ))}
        </S.Features>
      </S.Inner>
    </S.Section>
  );
};

export default Diferenciais;
