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

  /* ===== GENERAL ===== */
  html {
    scroll-behavior: smooth
  }
  
  body {
    font-family: 'SUIT';
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fw.normal};
    line-height: ${({ theme }) => theme.lh.sm};    background-color: ${({
	theme,
}) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  .sr-only {
  position: absolute;
  top: -9999px;
  left: -9999px;
  font-size: 0;
  color: transparent;
}
`

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
