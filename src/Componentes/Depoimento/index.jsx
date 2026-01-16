import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import * as S from "./style";

const Depoimento = () => {
    const depoimentos = [
        {
            nome: "João Silva",
            cargo: "Desenvolvedor Front-end",
            foto: "https://randomuser.me/api/portraits/men/1.jpg",
            texto: "O Weligton é um profissional excepcional! Sua dedicação e habilidades técnicas são impressionantes. Trabalhar com ele foi uma experiência enriquecedora."
        },
        {
            nome: "Maria Oliveira",
            cargo: "Gerente de Projetos",
            foto: "https://randomuser.me/api/portraits/women/2.jpg",
            texto: "Weligton demonstrou grande competência e proatividade em todos os projetos que participou. Sua capacidade de resolver problemas é notável."
        },
        {
            nome: "Carlos Pereira",
            cargo: "Designer UX/UI",
            foto: "https://randomuser.me/api/portraits/men/3.jpg",
            texto: "Trabalhar com Weligton foi uma experiência fantástica. Ele é criativo, colaborativo e sempre busca entregar o melhor resultado possível."
        },
        {
            nome: "Ana Souza",
            cargo: "Analista de Sistemas",
            foto: "https://randomuser.me/api/portraits/women/4.jpg",
            texto: "Weligton é um profissional dedicado e competente. Sua habilidade em comunicação e trabalho em equipe faz toda a diferença nos projetos."
        }
    ]; 
    
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cards visíveis baseados no tamanho da tela
    const getVisibleCards = () => {
        const width = window.innerWidth;
        if (width <= 480) return 1; // Mobile
        return 2; // Desktop e Tablet: sempre 2 cards
    };

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

    // Atualizar quantidade de cards visíveis ao redimensionar
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
            return newIndex < 0 ? depoimentos.length - visibleCards : newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + visibleCards;
            return newIndex >= depoimentos.length ? 0 : newIndex;
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Calcular índice final para exibição
    const getEndIndex = () => {
        const endIndex = currentIndex + visibleCards;
        return endIndex > depoimentos.length ? depoimentos.length : endIndex;
    };

    return (
        <S.Container>
            <S.Title>Depoimentos</S.Title>

            <S.CarouselWrapper>
                <S.CarouselButton onClick={handlePrev} aria-label="Anterior">
                    <ChevronLeft size={24} />
                </S.CarouselButton>

                <S.CarouselContent>
                    {depoimentos.slice(currentIndex, getEndIndex()).map((depoimento, index) => (
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
                {Array.from({ length: Math.ceil(depoimentos.length / visibleCards) }).map((_, index) => (
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