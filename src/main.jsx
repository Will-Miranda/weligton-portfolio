import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from "./StyleGlobal/style"
import Cabecalho from "./Componentes/Cabecalho"
import Rodape from './Componentes/Rodape'
import Inicio from './Paginas/Inicio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Cabecalho />
    <Inicio />
    <Rodape />
  </StrictMode>,
)
