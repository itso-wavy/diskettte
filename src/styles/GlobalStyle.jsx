import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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

  a {
    display: inline-block;
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

  /* ===== GENERAL ===== */
  body {
    font-family: SUIT;
    font-size: 16px;
    font-weight: 00;
    color: black;
    background-color: white;
    line-height: 1.3em;
  }
`;

export default GlobalStyle;
