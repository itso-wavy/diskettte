import styled, { css } from 'styled-components'

const $typeStyles = ({ $type, $img, $size }) => {
	switch ($type) {
		case 'rect':
			return css`
				min-height: 3.125rem;
				width: 100%;
				padding: 0.8rem 1.1rem;
				line-height: 1em;
				/* flex-grow: 1;
			flex-shrink: 1; */
			`
		case 'square':
			return css`
				background: transparent center/contain no-repeat url(${$img});
				width: 2.5rem;
				height: 2.5rem;
			`
		case 'icon':
			return css`
				margin: 0;
				width: ${$size || '1.5rem'};
				height: ${$size || '1.5rem'};
				color: inherit;
				background: transparent center/contain no-repeat url(${$img});
			`
		case 'badge':
			return css`
				& :hover {
					text-decoration: underline;
				}
			`
		default:
			return css``
	}
}

const $styleStyles = ({ $type, $style, theme }) => {
	const color = theme.color

	if ($type === 'rect' || $type === 'square') {
		switch ($style) {
			case 'primary':
				return css`
					background-color: ${color.black};
					color: ${color.white};
					border: 0;

					&:disabled {
						background-color: ${color.gray};
						color: ${color.white};
						border-color: ${color.gray};
					}

					&:active {
						border-color: 0;
					}
				`
			case 'secondary':
				return css`
					background-color: ${color.white};
					color: ${color.black};
					border: 1px solid ${color.black};

					&:disabled {
						background-color: ${color.lightgray};
						color: ${color.gray};
						border-color: ${color.gray};
					}

					&:active {
						border-color: ${color.gray};
					}
				`
		}
	}
}

const $sizeStyles = ({ $size, theme }) => {
	switch ($size) {
		case 'sm':
			return css`
				min-height: auto;
			`
		case 'lg':
			return css`
				font-size: 1.4rem;
				font-weight: ${theme.fw.normal};

				&:hover {
					text-decoration: 2px underline;
					text-underline-offset: 4px;
				}
			`
		default:
			return css``
	}
}

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

	${$typeStyles}
	${$styleStyles}
  ${$sizeStyles}
`

/* TYPE */
/* ${({ $type }) =>
		$type === 'rect' &&
		css`
			min-height: 3.125rem;
			width: 100%;
			padding: 0.8rem 1.1rem;
			line-height: 1em;
			flex-grow: 1;
			flex-shrink: 1;
		`}
	${({ $type, $img }) =>
		$type === 'square' &&
		css`
			background: transparent center/contain no-repeat url(${$img});
			width: 2.5rem;
			height: 2.5rem;
		`}
    ${({ $type, $size, $img }) =>
		$type === 'icon' &&
		css`
			margin: 0;
			width: ${$size || '1.5rem'};
			height: ${$size || '1.5rem'};
			color: inherit;
			background: transparent center/contain no-repeat url(${$img});
		`}
	${({ $type }) =>
		$type === 'badge' &&
		css`
			& :hover {
				text-decoration: underline;
			}
		`} */

/* STYLE */
/*  ${({ $type, $style, theme }) =>
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
					primary: theme.color.white,
					secondary: theme.color.gray,
				}[$style] || theme.color.white};
				border-color: ${{
					primary: `${theme.color.gray}`,
					secondary: `${theme.color.gray}`,
				}[$style] || theme.color.gray};
			}

			&:active {
				border-color: ${{
					primary: 0,
					secondary: `${theme.color.gray}`,
				}[$style] || 0};
			}
		`} */

/* SIZE */
/* ${({ $size, theme }) => css`
		${$size === 'sm' &&
		css`
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
	`} */
