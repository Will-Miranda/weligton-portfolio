import React from 'react';
import * as S from './style';
import { AlarmFill, Clock, Crosshair, Crosshair2, Display, People, PersonVcardFill } from 'react-bootstrap-icons';
import { dadosDiferenciais } from '../../data';

const iconMap = {
  AlarmFill,
  PersonVcardFill,
  Crosshair2,
  Display,
  People
};

const Diferenciais = () => {
  return (
    <S.Section>
      <S.Inner>
        <S.Title>{dadosDiferenciais.titulo}</S.Title>
        <S.Description>
          {dadosDiferenciais.descricao}
        </S.Description>

        <S.Features>
          {dadosDiferenciais.itens.map(item => {
            const IconComponent = iconMap[item.icon];
            return (
              <S.Feature key={item.id} tabIndex={0} aria-label={item.title}>
                <S.IconCircle aria-hidden>
                  <IconComponent />
                </S.IconCircle>
                <S.FeatureTitle>{item.title}</S.FeatureTitle>
              </S.Feature>
            );
          })}
        </S.Features>
      </S.Inner>
    </S.Section>
  );
};

export default Diferenciais;
