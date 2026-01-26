import React, { useState, useEffect, useRef } from "react";
import * as S from './style';
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { dadosClientes, dadosConexao } from '../../data';

const Conexao = () => {
    // REF: Referência para o container do carrossel
    const carouselRef = useRef(null);
    
    // DUPLICAÇÃO: Array duplicado para criar efeito infinito
    const duplicatedClientes = [...dadosClientes, ...dadosClientes];
    
    // ESTADO: Controla a posição atual do carrossel
    const [position, setPosition] = useState(0);
    
    // ESTADO: Controla se a animação automática está ativa
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    
    // EFEITO: Animação automática do carrossel
    useEffect(() => {
        // Só executa se o autoplay estiver ativo
        if (!isAutoPlay) return;
        
        const interval = setInterval(() => {
            setPosition((prevPosition) => {
                // Reset para início quando atingir o final do array original
                if (prevPosition >= dadosClientes.length) {
                    return 0;
                }
                return prevPosition + 1;
            });
        }, 3000); // Velocidade da animação: 3 segundos
        
        // LIMPEZA: Remove o intervalo quando o componente desmonta
        return () => clearInterval(interval);
    }, [isAutoPlay]);
    
    // FUNÇÃO: Navegação para o slide anterior
    const handlePrev = () => {
        setIsAutoPlay(false); // Pausa autoplay ao navegar manualmente
        setPosition((prevPosition) => {
            // Volta para o final se estiver no início
            if (prevPosition <= 0) {
                return dadosClientes.length - 1;
            }
            return prevPosition - 1;
        });
    }
    
    // FUNÇÃO: Navegação para o próximo slide
    const handleNext = () => {
        setIsAutoPlay(false); // Pausa autoplay ao navegar manualmente
        setPosition((prevPosition) => {
            // Reset para início se atingir o final
            if (prevPosition >= dadosClientes.length - 1) {
                return 0;
            }
            return prevPosition + 1;
        });
    }
    
    // FUNÇÃO: Retoma o autoplay após interação manual
    const resumeAutoPlay = () => {
        setTimeout(() => setIsAutoPlay(true), 5000); // Retoma após 5 segundos
    }

    return (
        <S.Container>
            {/* TÍTULO: Cabeçalho principal do componente */}
            <S.Title>{dadosConexao.titulo}</S.Title>
            <S.Description>{dadosConexao.descricao}</S.Description>

            {/* CARROSSEL: Container principal com indicadores e conteúdo */}
            <S.CarouselContainer>
                {/* BOTÃO ANTERIOR: Navegação para esquerda */}
                <S.NavButton 
                    direction="left" 
                    onClick={handlePrev}
                    onMouseUp={resumeAutoPlay}
                    aria-label="Slide anterior"
                >
                    <ChevronLeft size={24} />
                </S.NavButton>

                {/* CARROSSEL INFINITO: Área de exibição dos logos */}
                <S.InfiniteCarousel ref={carouselRef}>
                    <S.CarouselTrack position={position}>
                        {/* MAPEAMENTO: Renderiza todos os logos duplicados */}
                        {duplicatedClientes.map((cliente, index) => (
                            <S.Card key={`${cliente.id}-${index}`}>
                                <S.Logo src={cliente.logo} alt={`Cliente ${cliente.id}`} />
                            </S.Card>
                        ))}
                    </S.CarouselTrack>
                </S.InfiniteCarousel>

                {/* BOTÃO PRÓXIMO: Navegação para direita */}
                <S.NavButton 
                    direction="right" 
                    onClick={handleNext}
                    onMouseUp={resumeAutoPlay}
                    aria-label="Próximo slide"
                >
                    <ChevronRight size={24} />
                </S.NavButton>
            </S.CarouselContainer>

            {/* INDICADORES: Pontos indicadores de posição */}
            <S.Indicators>
                {/* MAPEAMENTO: Renderiza indicadores para cada cliente */}
                {dadosClientes.map((_, index) => (
                    <S.Dot
                        key={index}
                        data-isactive={index === position}
                        $isActive={index === position}
                        onClick={() => {
                            setPosition(index);
                            setIsAutoPlay(false);
                            resumeAutoPlay();
                        }}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </S.Indicators>
        </S.Container>
    )
}

export default Conexao;