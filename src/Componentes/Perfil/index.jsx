import React from "react";
import * as S from "./style";
import { dadosPerfil, dadosContato } from '../../data';

const Perfil = () => {

    const handleWhatsAppClick = (e) => {
        e.preventDefault();

        const formattedMessage = dadosContato.mensagemWhatsApp;
        window.open(`https://wa.me/${dadosContato.whatsapp}?text=` + encodeURIComponent(formattedMessage), '_blank');
    };

    return (
        <S.Wrapper>

            {/* Seção de chamada de atenção */}
            <S.Section >
                <S.Content>
                    <S.Title>
                        {dadosPerfil.titulo}
                    </S.Title>

                    <S.Text>
                        {dadosPerfil.texto}
                    </S.Text>
                    <S.Button onClick={handleWhatsAppClick}>{dadosPerfil.botaoTexto}</S.Button>
                </S.Content>

            </S.Section>


        </S.Wrapper>
    )
}

export default Perfil;