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
		height: 14px;
    /* width: 0; */
    /* display: none; */
  }
  ::-webkit-scrollbar-track {
    /* background-color: ${({ theme }) => theme.color.darkgray2}; */
		background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    /* background-color: ${({ theme }) => theme.color.header};  */
		/* background-clip: padding-box;
		border: 1px solid transparent; */
    border-radius: 8px;
    background-image: ${({ theme }) =>
			`linear-gradient(${theme.color.darkgray}, ${theme.color.bluegray})`}; 
		background-clip: padding-box;
		border: 4px solid transparent;
  }
  ::-webkit-scrollbar-thumb:hover {
    /* background-color: ${({ theme }) => theme.color.shadow};  */
    /* background: ${({ theme }) => theme.color.darkgray2}; */
    background-image: ${({ theme }) =>
			`linear-gradient(${theme.color.sora}, ${theme.color.lightblue})`}; 
		background-clip: padding-box;
  }
	&::-webkit-scrollbar-thumb:horizontal {
    background-image:none;
		background-color: ${({ theme }) => theme.color.gray};
	}
	&::-webkit-scrollbar-thumb:horizontal:hover {
		background-image: ${({ theme }) =>
			`linear-gradient(to right,${theme.color.gray}, ${theme.color.shadow})`};
	}

  ::selection {
    background-color: #555adc55;
  }
`

export default GlobalStyle
