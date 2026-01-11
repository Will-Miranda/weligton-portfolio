import React from "react";
import Perfil1 from "../../Assets/perfil-1.JPG"
import * as S from "./style"


const Inicio = () => {
    return (
        <S.Wrapper>
            {/* Seção de apresentação */}
            <S.SectionPresentation>

                <S.Content>
                    <S.Title>Weligton – Consultoria Administrativa e RH</S.Title>
                    
                    <S.Text>
                        Somos o apoio estratégico que a sua empresa precisa para crescer 
                        com consistência e sustentabilidade. Atuamos de forma autônoma e personalizada, 
                        oferecendo soluções sob medida para organizações que buscam eficiência, 
                        desempenho e alinhamento estratégico de suas equipes.
                        Nossa atuação é baseada em diagnóstico preciso, planejamento estruturado e 
                        execução orientada a resultados, contribuindo diretamente para a evolução dos 
                        processos, das pessoas e do negócio.
                    </S.Text>
                </S.Content>
            </S.SectionPresentation>


            {/* Seção de chamada de atenção */}
            <S.Section >
                <S.Content>
                    <S.Title>Nosso Compromisso</S.Title>

                    <S.Text>
                        Acreditamos que resultados consistentes são construídos a partir de pessoas 
                        bem direcionadas, processos eficientes e estratégias claras. Nosso compromisso 
                        é apoiar sua empresa na construção de uma gestão mais profissional, produtiva e 
                        preparada para os desafios do mercado.
                    </S.Text>
                    <S.Button>Tire suas dúvidas</S.Button>
                </S.Content>

                <S.ImageWrapper>
                    <S.Image src={Perfil1} alt="Foto de Perfil - direita" />
                </S.ImageWrapper>
            </S.Section>

        </S.Wrapper>
    )
}

export default Inicio;