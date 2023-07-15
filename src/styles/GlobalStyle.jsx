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

  /* ===== GENERAL ===== */
  body {
    font-family: SUIT;
    font-size: 16px;
    font-weight: 00;
    color: black;
    background-color: white;
    line-height: 1.3em;
  }
`

// body {
//   background-color: ${(props) => props.theme.colors.background};
//   color: ${(props) => props.theme.colors.text};
// }

//   ${(props) => {
//		switch (props.$mode) {
//			case 'dark':
//				return css`
//					background-color: #0f172a;
//					color: white;
//					input:checked + && {
//						color: #38bdf8;
//					}
//				`;
//			default:
//				return css`
//					background-color: white;
//					color: #0f172a;
//					input:checked + && {
//						color: #38bdf8;
//					}
//				`;
//		}
//	}}
//
// `;

export default GlobalStyle
