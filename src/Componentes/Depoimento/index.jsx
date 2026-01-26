import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import * as S from "./style";
import { dadosDepoimentos } from '../../data';

const Depoimento = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getVisibleCards = () => {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        return 2;
    };

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(getVisibleCards());
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - visibleCards;
            return newIndex < 0 ? dadosDepoimentos.length - visibleCards : newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + visibleCards;
            return newIndex >= dadosDepoimentos.length ? 0 : newIndex;
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getEndIndex = () => {
        const endIndex = currentIndex + visibleCards;
        return endIndex > dadosDepoimentos.length ? dadosDepoimentos.length : endIndex;
    };

    return (
        <S.Container>
            <S.Title>Depoimentos</S.Title>

            <S.CarouselWrapper>
                <S.CarouselButton onClick={handlePrev} aria-label="Anterior">
                    <ChevronLeft size={24} />
                </S.CarouselButton>

                <S.CarouselContent>
                    {dadosDepoimentos.slice(currentIndex, getEndIndex()).map((depoimento, index) => (
                        <S.DepoimentoCard key={currentIndex + index}>
                            <S.Foto 
                                src={depoimento.foto} 
                                alt={`Foto de ${depoimento.nome}`} 
                            />
                            <S.Nome>{depoimento.nome}</S.Nome>
                            <S.Cargo>{depoimento.cargo}</S.Cargo>
                            <S.Texto>{depoimento.texto}</S.Texto>
                        </S.DepoimentoCard>
                    ))}
                </S.CarouselContent>

                <S.CarouselButton onClick={handleNext} aria-label="Próximo">
                    <ChevronRight size={24} />
                </S.CarouselButton>
            </S.CarouselWrapper>

            <S.Indicators>
                {Array.from({ length: Math.ceil(dadosDepoimentos.length / visibleCards) }).map((_, index) => (
                    <S.Dot 
                        key={index} 
                        isActive={Math.floor(currentIndex / visibleCards) === index}
                        onClick={() => goToSlide(index * visibleCards)}
                        aria-label={`Ir para grupo de depoimentos ${index + 1}`}
                    />
                ))}
            </S.Indicators>
        </S.Container>
    );
};

export default Depoimento;