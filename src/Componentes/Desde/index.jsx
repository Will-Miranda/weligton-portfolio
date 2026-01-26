import React from "react"
import { Building, EmojiSmile, PersonArmsUp, Star } from "react-bootstrap-icons"
import * as A from "./style"
import { dadosEstatisticas } from '../../data';

const iconMap = {
  PersonArmsUp,
  EmojiSmile,
  Star,
  Building
};

const Desde = () => {
    return (
        <A.Container>
            <A.Title>{dadosEstatisticas.titulo}</A.Title>
            <A.List>
                {dadosEstatisticas.itens.map((item) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                        <A.Items key={item.id}>
                            <A.Icon as={IconComponent} />
                            <A.Number>{item.number}</A.Number>
                            <A.Description>{item.description}</A.Description>
                        </A.Items>
                    );
                })}
            </A.List>
        </A.Container>
    )
}

export default Desde