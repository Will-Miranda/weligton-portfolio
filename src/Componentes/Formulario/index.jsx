import React from 'react';
import * as S from './style';
import { Whatsapp } from 'react-bootstrap-icons';
import { dadosFormulario, dadosContato } from '../../data';

const Formulario = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const whatsappMessage = `Novo contato pelo site\n\nNome: ${name}\nEmail: ${email}\nMensagem:\n${message}`;
    const whatsappUrl = `https://wa.me/${dadosContato.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const renderField = (field) => {
    if (field.type === 'textarea') {
      return (
        <S.Field key={field.id}>
          <S.Label htmlFor={field.id}>{field.label}</S.Label>
          <S.Textarea 
            id={field.id} 
            name={field.id}
            rows={field.rows}
            placeholder={field.placeholder}
            required
            aria-describedby={`${field.id}-help`}
          />
          <S.HelpText id={`${field.id}-help`}>{field.helpText}</S.HelpText>
        </S.Field>
      );
    }

    return (
      <S.Field key={field.id}>
        <S.Label htmlFor={field.id}>{field.label}</S.Label>
        <S.Input 
          id={field.id} 
          name={field.id}
          type={field.type} 
          placeholder={field.placeholder} 
          required 
          aria-describedby={`${field.id}-help`}
        />
        <S.HelpText id={`${field.id}-help`}>{field.helpText}</S.HelpText>
      </S.Field>
    );
  };

  return (
    <S.Section id={dadosFormulario.id}>
      <S.Container>
        <S.Left>
          <S.Title>{dadosFormulario.titulo}</S.Title>
        </S.Left>

        <S.Right>
          <S.Form onSubmit={handleSubmit}>
            {dadosFormulario.campos.map(renderField)}

            <S.Button type="submit">{dadosFormulario.botaoTexto}</S.Button>
          </S.Form>

          <S.WhatsappLink 
            href={`https://wa.me/${dadosContato.whatsapp}`} 
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
