import React from 'react';
import * as S from './style';
import { Whatsapp } from 'react-bootstrap-icons';

const Formulario = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Integração futura com API/service
    console.log('Form data:', { email, message });
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <S.Section id="contato">
      <S.Container>
        <S.Left>
          <S.Title>Como Podemos te Ajudar</S.Title>
        </S.Left>

        <S.Right>
          <S.Form onSubmit={handleSubmit}>
            <S.Field>
              <S.Label htmlFor="email">E-mail:</S.Label>
              <S.Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="seu@email.com" 
                required 
                aria-describedby="email-help"
              />
              <S.HelpText id="email-help">Seu e-mail será usado apenas para resposta</S.HelpText>
            </S.Field>

            <S.Field>
              <S.Label htmlFor="message">Mensagem:</S.Label>
              <S.Textarea 
                id="message" 
                name="message"
                rows={5} 
                placeholder="Digite sua mensagem aqui..."
                required
                aria-describedby="message-help"
              />
              <S.HelpText id="message-help">Descreva como podemos ajudar você</S.HelpText>
            </S.Field>

            <S.Button type="submit">Enviar Mensagem</S.Button>
          </S.Form>

          <S.WhatsappLink 
            href="https://wa.me/5527997916541" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
          >
            <Whatsapp size={32} />
          </S.WhatsappLink>
        </S.Right>
      </S.Container>
    </S.Section>
  );
};

export default Formulario;
