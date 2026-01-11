import React from "react";
import { Flag, PencilSquare, Trophy, Award, ArrowDownUp, GraphUp, EmojiSmile, GeoAlt } from "react-bootstrap-icons"
import * as S from './style';

// Declaração do componente funcional Contratar
const Contratar = () => {

    // Array de objetos contendo ícones e textos para cada item
    const items = [
        { 
            id: 1, 
            icon: (<Flag aria-hidden />), 
            text: "Para ter em sua empresa profissionais que fazem a diferença, que envolvem a equipe em treinamentos, que promovem o engajamento e melhoria dos resultados." 
        },
        { 
            id: 2, 
            icon: (<PencilSquare aria-hidden />), 
            text: "Para tirar os planos do papel, contando com um parceiro para ajudar implementar ações estratégicas." 
        },
        { 
            id: 3, 
            icon: (<Trophy aria-hidden />), 
            text: "Para promover o crescimento que tanto precisa, desenvolver a liderança, extrair o melhor de cada profissional e transformar sua empresa em uma organização que valoriza, potencializa e desenvolve seus profissionais." 
        },
        { 
            id: 4, 
            icon: (<Award aria-hidden />), 
            text: "Para profissionalizar os processos internos, treinar a equipe e melhorar a qualidade de produtos e serviços." 
        },
        { 
            id: 5, 
            icon: (<ArrowDownUp aria-hidden />), 
            text: "Para realizar mudanças e transições na empresa, que não consegue sozinhos." 
        },
        { 
            id: 6, 
            icon: (<GraphUp aria-hidden />), 
            text: "Para reduzir o turnover e atrair talentos." 
        },
        { 
            id: 7, 
            icon: (<EmojiSmile aria-hidden />), 
            text: "Para definir planos estratégicos e envolver a equipe para que sejam realizados." 
        },
        { 
            id: 8, 
            icon: (<GeoAlt aria-hidden />), 
            text: "Para se recolocar no mercado de trabalho de forma estratégica e com apoio de uma equipe experiente." 
        },
    ]

    return (
        <S.Container>
            <S.Title>Por que contratar nossos serviços?</S.Title>
            <S.List>
                {items.map(item => (
                    <S.Item key={item.id}>
                        <S.Icon>{item.icon}</S.Icon>
                        <S.Text>{item.text}</S.Text>
                    </S.Item>
                ))}
            </S.List>
        </S.Container>
    )
}

export default Contratar;