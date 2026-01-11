// Componente: Cabecalho
// Descrição: Cabeçalho responsivo e dinâmico com menu hamburguer para telas pequenas.

import React, { useState, useEffect } from "react"; // Importa React e hooks (estado e efeitos colaterais)
import { Container, Logo, NavItens, MenuButton, NavList } from "./style"; // Importa os componentes estilizados (styled-components)
import LogoSrc from "../../assets/logo.png"; // Caminho padrão para a imagem do logo

/**
 * Cabecalho
 * @param {Object[]} items - Array de objetos que definem os links do menu (opcional)
 * @param {string} logoSrc - Caminho da imagem do logo (opcional)
 */
const Cabecalho = ({ items = null, logoSrc = LogoSrc }) => {
    // defaultItems: lista padrão de itens exibidos no menu caso a prop `items` não seja passada
    const defaultItems = [
        { id: 'inicio', label: 'Início', href: '#inicio' }, // id: chave única; label: texto exibido; href: âncora/rota
        { id: 'sobre', label: 'Sobre', href: '#sobre' },
        { id: 'servicos', label: 'Serviços', href: '#servicos' },
        { id: 'contato', label: 'Contato', href: '#contato' },
        { id: 'conversa', label: 'Conversar com Consultor', href: '#conversa' }
    ];

    // navItems: usa a lista passada por prop `items` se existir, caso contrário usa `defaultItems`.
    // Isso torna o componente reutilizável em diferentes páginas com menus personalizados.
    const navItems = items || defaultItems;

    // Estado local `open` controla se o menu mobile está aberto (true) ou fechado (false)
    const [open, setOpen] = useState(false);

    // useEffect para adicionar um listener de resize que fecha o menu quando a tela é maior que 768px.
    // Evita deixar o menu mobile aberto quando o usuário redimensiona a janela para desktop.
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 768) setOpen(false); // fecha o menu ao voltar para desktop
        };
        window.addEventListener('resize', onResize);
        // Cleanup: remove o listener quando o componente é desmontado
        return () => window.removeEventListener('resize', onResize);
    }, []); // array de dependências vazio significa que o efeito roda apenas ao montar/desmontar

    // Render do componente:
    return (
        // Container é um elemento header estilizado que envolve todo o cabeçalho
        <Container>
            {/* Logo: imagem clicável - recebe `logoSrc` via prop ou usa a imagem padrão */}
            <Logo src={logoSrc} alt="Logo" />

            {/*
                MenuButton: botão do tipo 'hamburguer' usado em telas pequenas.
                - onClick alterna o estado `open` para abrir/fechar o menu
                - aria-expanded indica para leitores de tela se o menu está aberto
                - aria-label fornece uma descrição acessível do botão
            */}
            <MenuButton
                onClick={() => setOpen(prev => !prev)}
                aria-expanded={open}
                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
                {/* Três spans representam as três linhas do ícone hamburguer. Eles são estilizados em CSS. */}
                <span />
                <span />
                <span />
            </MenuButton>

            {/*
                NavItens: container do menu de navegação.
                - Recebe a prop `open` para controlar a exibição em mobile
                - role="navigation" e aria-label melhoram a acessibilidade
            */}
            <NavItens open={open} role="navigation" aria-label="main navigation">
                <NavList>
                    {/*
                        Gera os itens do menu dinamicamente a partir de `navItems`.
                        - `key` é necessário para que o React identifique cada item de forma única
                        - Cada item é um <li> contendo um <a> com href e texto
                    */}
                    {navItems.map(item => (
                    <li key={item.id} data-id={item.id}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                    ))}                
                </NavList>
            </NavItens>

        </Container>
    )
}

export default Cabecalho; // Exporta o componente para uso em outras partes da aplicação
