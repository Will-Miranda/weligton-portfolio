import React from "react";
import * as S from "./style";

const Banner = () => {
    return (
        <S.Container>

            {/* Seção de apresentação */}
            <S.SectionPresentation>

                <S.Content>
                    <S.Title>SOMOS O APOIO ESTRATÉGICO DA SUA EMPRESA</S.Title>
                    
                    <S.Text>
                        Redefina o futuro da sua equipe e impulsione para o sucesso.
                        Consultoria Administrativa e RH, Planejamento estratégico, Recrutaento e seleção,
                        Treinamentos, Planos de Cargo e Salários, Terceirização de RH e
                        muito mais.
                    </S.Text>
                </S.Content>
            </S.SectionPresentation>
        </S.Container>
    );
};

export default Banner;