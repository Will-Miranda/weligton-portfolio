import React from 'react';
import * as S from './style';
import { Whatsapp } from 'react-bootstrap-icons';

const Formulario = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar envio para API, e-mail ou serviço de backend
    alert('Mensagem enviada (simulada)');
  };

  return (
    <S.Section>
      <S.Container>
        <S.Left>
          <S.Title>Como Podemos te Ajudar</S.Title>
        </S.Left>

        <S.Right>
          <S.Form onSubmit={handleSubmit}>
            <S.Field>
              <S.Label htmlFor="email">E-mail:</S.Label>
              <S.Input id="email" type="email" placeholder="Digite aqui seu E-mail" required />
            </S.Field>

            <S.Field>
              <S.Label htmlFor="message">Mensagem:</S.Label>
              <S.Textarea id="message" rows={5} placeholder="Mensagem" />
            </S.Field>

            <S.Button type="submit">Send</S.Button>

            <Whatsapp size={36} style={{ marginTop: '1rem', color: '#25D366', cursor: 'pointer' }} aria-hidden />
          </S.Form>
        </S.Right>
      </S.Container>
    </S.Section>
  );
};

export default Formulario;
