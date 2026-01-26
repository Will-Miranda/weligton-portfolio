import React from "react";
import * as S from "./style";
import { dadosBanner } from '../../data';

const Banner = () => {
    return (
        <S.Container id={dadosBanner.id}>

            {/* Seção de apresentação */}
            <S.SectionPresentation>

                <S.Content>
                    <S.Title>{dadosBanner.titulo}</S.Title>
                    
                    <S.Text>
                        {dadosBanner.texto}
                    </S.Text>
                </S.Content>
            </S.SectionPresentation>
        </S.Container>
    );
};

export default Banner;