import React, { useState, useEffect } from 'react';
import * as S from './style.js';
import { Instagram, Linkedin, Whatsapp } from 'react-bootstrap-icons';
import LogoSrc1 from '../../assets/logo-1.png'

const Rodape = () => {
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());

  const socials = [
    {id: 'instagram', Icon: Instagram, href: 'https://www.instagram.com/brav.owear/'},
    {id: 'linkedin', Icon: Linkedin, href: 'https://www.linkedin.com/in/willian-miranda-de-oliveira-7195642ba/'},
    {id: 'whatsapp', Icon: Whatsapp, href: 'https://wa.me/5527997916541'},
  ];

  useEffect(() => {
    setAnoAtual(new Date().getFullYear());
  }, []);

  return (
    <S.Footer>
      <S.Container>
        <S.Logo src={LogoSrc1} alt="Logo" />
        <S.SocialIcons aria-label="redes sociais">
            {socials.map(s => (
                <a 
                    key={s.id}
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={s.id}
                    title={s.id}
                >
                    <s.Icon size={24} />
                </a>
            ))}
        </S.SocialIcons>
        <S.Copyright>© {anoAtual} Todos os Direitos Reservados a <strong>Weligton Consultoria</strong>.
        Desenvolvido por <S.Developer>WillDev</S.Developer>.</S.Copyright>
      </S.Container>
    </S.Footer>
  );
}

export default Rodape;