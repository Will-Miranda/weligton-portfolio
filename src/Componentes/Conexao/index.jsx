import React, { useState } from "react";
import * as S from './style';
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const Conexão = () => {

    const clientes = [
        {
            id: 1,
            nome: "Empresa A",
            logo: "https://cdn6.f-cdn.com/contestentries/2220272/58801622/640732f63a225_thumb900.jpg"
        },
        {
            id: 2,
            nome: "Empresa B",
            logo: "https://static.vecteezy.com/ti/vetor-gratis/p1/19073761-unidade-de-logotipo-da-matriz-logotipo-do-nome-da-empresa-ficticia-da-matriz-gratis-vetor.jpg"
        },
        {
            id: 3,
            nome: "Empresa C",
            logo: "https://thumbs.dreamstime.com/b/airmail-arte-vetorial-de-logotipo-empresa-fict%C3%ADcia-uma-ficcional-com-um-s%C3%ADmbolo-avi%C3%A3o-em-papel-ilustra%C3%A7%C3%A3o-para-empresas-e-180612818.jpg"
        },
        {
            id: 4,
            nome: "Empresa D",
            logo: "https://thumbs.dreamstime.com/b/airmail-arte-vetorial-de-logotipo-empresa-fict%C3%ADcia-uma-ficcional-com-um-s%C3%ADmbolo-avi%C3%A3o-em-papel-ilustra%C3%A7%C3%A3o-para-empresas-e-180612571.jpg" 
        },
        {
            id: 5,
            nome: "Empresa E",
            logo: "https://turbologo.com/articles/wp-content/uploads/2019/08/Bank-of-America-logo.png"
        },
        {
            id: 6,
            nome: "Empresa F",
            logo: "https://img.freepik.com/vetores-premium/logo-ficticio-una-buena-idea_471774-60.jpg"
        },
        {
            id: 7,
            nome: "Empresa G",
            logo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9032499-fic-logo-fic-letter-fic-letter-logo-design-initials-fic-logo-linked-with-circle-and-uppercase-monogram-logo-fic-typography-for-technology-business-and-real-marca-imobiliaria-vetor.jpg   "
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? clientes.length - 1 : prevIndex - 1
        );
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === clientes.length - 1 ? 0 : prevIndex + 1
        );
    }

    const getCardIndex = (offset) => (currentIndex + offset) % clientes.length;

    return (
        <S.Container>
            <S.Title>Quem Já Tem Conexão Com Weligton</S.Title>
            <S.Description>Nossos Clientes e Parceiros</S.Description>

            <S.CarouselWrapper>
                <S.CarouselButton onClick={handlePrev} aria-label="Anterior">
                    <ChevronLeft size={24} />
                </S.CarouselButton>

                <S.CarouselContent>
                    {[0,1,2,3,4].map((offset) => (
                        <S.Card key={offset}>
                            <S.Logo src={clientes[getCardIndex(offset)].logo} alt={clientes[getCardIndex(offset)].nome} />
                            <S.CardName>{clientes[getCardIndex(offset)].nome}</S.CardName>
                        </S.Card>

                    ))}
                </S.CarouselContent>

                <S.CarouselButton onClick={handleNext} aria-label="Próximo" >
                    <ChevronRight size={24} />
                </S.CarouselButton>
            </S.CarouselWrapper>

            <S.Indicators>
                {clientes.map((_, index) => (
                    <S.Dot
                        key={index}
                        isActive={index === currentIndex}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir para o cliente ${index + 1}`} 
                    />
                ))}
            </S.Indicators>
        </S.Container>
    )
}

export default Conexão;