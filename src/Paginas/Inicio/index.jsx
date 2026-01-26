import React from "react";
import * as S from "./style"
import Banner from '../../Componentes/Banner'
import CardsServicos from '../../Componentes/CardsServicos'
import Diferenciais from '../../Componentes/Diferenciais'
import Perfil from '../../Componentes/Perfil'
import Contratar from '../../Componentes/Contratar'
import Depoimento from '../../Componentes/Depoimento'
import Conexao from '../../Componentes/Conexao'
import Desde from '../../Componentes/Desde'
import Formulario from '../../Componentes/Formulario'

const Inicio = () => {
    return (
        <S.Container>
            <Banner />
            <CardsServicos />
            <Diferenciais />
            <Perfil />
            <Contratar />
            <Depoimento />
            <Conexao />
            <Desde />
            <Formulario />

        </S.Container>
    )
}

export default Inicio;