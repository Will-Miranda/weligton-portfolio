import React from "react";
import { Flag, PencilSquare, Trophy, Award, ArrowDownUp, GraphUp, EmojiSmile, GeoAlt } from "react-bootstrap-icons"
import * as S from './style';
import { dadosContratar } from '../../data';

const iconMap = {
  Flag,
  PencilSquare,
  Trophy,
  Award,
  ArrowDownUp,
  GraphUp,
  EmojiSmile,
  GeoAlt
};

// Declaração do componente funcional Contratar
const Contratar = () => {

    return (
        <S.Container>
            <S.Title>{dadosContratar.titulo}</S.Title>
            <S.List>
                {dadosContratar.itens.map(item => {
                    const IconComponent = iconMap[item.icon];
                    return (
                        <S.Item key={item.id}>
                            <S.Icon>
                                <IconComponent aria-hidden />
                            </S.Icon>
                            <S.Text>{item.text}</S.Text>
                        </S.Item>
                    );
                })}
            </S.List>
        </S.Container>
    )
}

export default Contratar;