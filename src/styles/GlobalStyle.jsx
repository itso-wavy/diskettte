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
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'SUIT';
    font-size: 1rem;
    line-height: 1.3em;
    font-weight: ${({ theme }) => theme.fw.normal};
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }

  a:focus {
		outline-color: ${({ theme }) => theme.color.safe};
		outline-offset: 4px;
	}

  .sr-only {
    position: absolute;
    top: -9999px;
    left: -9999px;
    font-size: 0;
    color: transparent;
  }

  ::-webkit-scrollbar {
    height: 0;
    /* width: 0; */
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.darkgray2}; 
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.header}; 
		background-clip: padding-box;
		border: 1px solid transparent;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.color.shadow}; 
  }

  ::selection {
    background-color: #555adc55;
  }
`

export default GlobalStyle
