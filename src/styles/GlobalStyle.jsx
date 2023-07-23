import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* ===== CUSTOM RESET ===== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  li {
    list-style: none;
  }
  
  a {
    display: inline-block;
		color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: 0;
    font-family: inherit;
    cursor: pointer;

    &:disabled {
      background-color: inherit;
      color: inherit;
      cursor: auto;
    }
  } 

  summary {
    list-style: none;
    cursor: pointer;
  }

  /* ===== GENERAL ===== */
  html {
    scroll-behavior: smooth
  }
  
  body {
    font-family: 'SUIT';
    font-size: 1rem;
    line-height: 1.3em;
    font-weight: ${({ theme }) => theme.fw.normal};
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }

  .sr-only {
    position: absolute;
    top: -9999px;
    left: -9999px;
    font-size: 0;
    color: transparent;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
`

export default GlobalStyle
