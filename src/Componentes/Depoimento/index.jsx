import React,{ useState } from "react";
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

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? depoimentos.length - 1 : prevIndex - 1
        )
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === depoimentos.length - 1 ? 0 : prevIndex + 1
        )
    };

    return (
        <S.Container>
            <S.Title>Depoimentos</S.Title>

            <S.CarouselWrapper>
                <S.CarouselButton onClick={handlePrev} aria-label="Anterior">
                    <ChevronLeft size={24} />
                </S.CarouselButton>

                <S.CarouselContent>
                    <S.DepoimentoCard>
                        <S.Foto src={depoimentos[currentIndex].foto} alt={depoimentos[currentIndex].nome} />
                        <S.Nome>{depoimentos[currentIndex].nome}</S.Nome>
                        <S.Cargo>{depoimentos[currentIndex].cargo}</S.Cargo>
                        <S.Texto>{depoimentos[currentIndex].texto}</S.Texto>
                    </S.DepoimentoCard>
                    
                    <S.DepoimentoCard>
                        <S.Foto src={depoimentos[(currentIndex + 1) % depoimentos.length].foto} alt={depoimentos[(currentIndex + 1) % depoimentos.length].nome} />
                        <S.Nome>{depoimentos[(currentIndex + 1) % depoimentos.length].nome}</S.Nome>
                        <S.Cargo>{depoimentos[(currentIndex + 1) % depoimentos.length].cargo}</S.Cargo>
                        <S.Texto>{depoimentos[(currentIndex + 1) % depoimentos.length].texto}</S.Texto>
                    </S.DepoimentoCard>
                </S.CarouselContent>

                <S.CarouselButton onClick={handleNext} aria-label="Próximo">
                    <ChevronRight size={24} />
                </S.CarouselButton>
            </S.CarouselWrapper>

            <S.Indicators>
                {depoimentos.map((_, index) => (
                    <S.Dot 
                        key={index} 
                        isActive={index === currentIndex}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir para depoimento ${index + 1}`}
                    />
                ))}
            </S.Indicators>
        </S.Container>
    );
};

export default Depoimento;