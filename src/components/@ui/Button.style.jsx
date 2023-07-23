import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 0.55em;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fw.medium};
	border-radius: ${({ $radius }) => $radius || 0};
	/* transition: all 0.5s ease; */

	img,
	svg {
		margin-left: auto;
	}

	&:focus {
		outline-color: ${({ theme }) => theme.color.safe};
		outline-offset: 4px;
	}

	/* TYPE */
	${({ $type, $size, $img }) =>
		$type === 'icon' &&
		css`
			margin: 0;
			width: ${$size || '1.5rem'};
			height: ${$size || '1.5rem'};
			background: transparent center/contain no-repeat url(${$img});
		`}
	${({ $type }) =>
		$type === 'rect' &&
		css`
			min-height: 3.125rem;
			width: 100%;
			padding: 0.8rem 1.1rem;
			line-height: 1em;
			/* flex-grow: 1;
			flex-shrink: 1; */
		`}

	${({ $type, $img }) =>
		$type === 'square' &&
		css`
			background: transparent center/contain no-repeat url(${$img});
			width: 2.5rem;
			height: 2.5rem;
		`}

  /* STYLE */
  ${({ $type, $style, theme }) =>
		($type === 'rect' || $type === 'square') &&
		css`
			background-color: ${{
				primary: theme.color.black,
				secondary: theme.color.white,
			}[$style] || theme.color.black};
			color: ${{
				primary: theme.color.white,
				secondary: theme.color.black,
			}[$style] || theme.color.white};
			border: ${{
				primary: 0,
				secondary: `1px solid ${theme.color.black}`,
			}[$style] || 0};

			&:disabled {
				background-color: ${{
					primary: theme.color.gray,
					secondary: theme.color.lightgray,
				}[$style] || theme.color.gray};
				color: ${{
					secondary: theme.color.gray,
				}[$style] || theme.color.white};
				border-color: ${{
					secondary: `${theme.color.gray}`,
				}[$style] || 0};
			}
		`}

  /* SIZE */
  ${({ $size, theme }) => css`
		${$size === 'xs' &&
		css`
			font-size: 0.75rem; // 12px
			font-weight: ${theme.fw.normal};
			/* gap: 6px; */
			padding: 0.5em 0.8em;
			width: auto;
			min-height: auto;
			/* justify-content: space-between; */

			/* img {
				height: 0.65rem;
				width: 0.65rem;
			} */
			&:hover {
				text-decoration: underline;
			}
		`}
		${$size === 'sm' &&
		css`
			font-weight: ${theme.fw.normal};
			/* height: 1.875rem; */
			padding: 0.4em 0.8em;
			width: auto;
			min-height: auto;
		`}
    ${$size === 'lg' &&
		css`
			font-size: 1.4rem;
			font-weight: ${theme.fw.normal};

			&:hover {
				text-decoration: 2px underline;
				text-underline-offset: 4px;
			}
		`}
	`}
`
