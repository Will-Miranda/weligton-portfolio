import React, { useState, useEffect } from "react";
import { Container, Logo, NavItens, MenuButton, NavList } from "./style";
import LogoSrc from "../../assets/logo.png";
import { dadosCabecalho } from '../../data';

const Cabecalho = ({ items = null, logoSrc = LogoSrc }) => {
    const navItems = items || dadosCabecalho;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 768) setOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <Container>
            <Logo src={logoSrc} alt="Logo Weligton Consultoria" />
            
            <MenuButton
                onClick={() => setOpen(prev => !prev)}
                aria-expanded={open}
                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
                <span />
                <span />
                <span />
            </MenuButton>

            <NavItens open={open} role="navigation" aria-label="Navegação principal">
                <NavList>
                    {navItems.map(item => (
                    <li key={item.id}>
                        <a href={item.href} className={item.className}>{item.label}</a>
                    </li>
                    ))}                
                </NavList>
            </NavItens>
        </Container>
    )
}

export default Cabecalho;
