import React from "react";
import Perfil1 from "../../assets/perfil-1.jpg"
import * as S from "./style"
import CardsServicos from "../../Componentes/CardsServicos";
import Diferenciais from "../../Componentes/Diferenciais";
import Banner from "../../Componentes/Banner";
import Contratar from "../../Componentes/Contratar";
import Depoimento from "../../Componentes/Depoimento";
import Conexao from "../../Componentes/Conexao";
import Desde from "../../Componentes/Desde";
import Formulario from "../../Componentes/Formulario";

const Inicio = () => {
    return (
        <S.Wrapper>
            <Banner />
            <CardsServicos />
            <Diferenciais />


            {/* Seção de chamada de atenção */}
            <S.Section >
                <S.Content>
                    <S.Title>
                        Estamos constantemente inovando e 
                        aprimorando nossos serviços
                    </S.Title>

                    <S.Text>
                        Utilizamos as mais recentes tecnologias e 
                        ferramentas de RH para otimizar processos e 
                        garantir resultados precisos e rápidos.
                    </S.Text>
                    <S.Button>Tire suas dúvidas</S.Button>
                </S.Content>

                <S.ImageWrapper>
                    <S.Image src={Perfil1} alt="Foto de Perfil - direita" />
                </S.ImageWrapper>
            </S.Section>

            <Contratar />
            <Depoimento />
            <Conexao />
            <Desde />
            <Formulario />

        </S.Wrapper>
    )
}

export default Inicio;