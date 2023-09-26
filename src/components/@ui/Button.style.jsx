import styled, { css } from 'styled-components'

const $typeStyles = ({ $type, $img, $size }) => {
	switch ($type) {
		case 'rect':
			return css`
				height: 3rem;
				width: 100%;
				padding: 0.8rem 1.1rem;
				line-height: 1em;
			`
		case 'square':
			return css`
				background: transparent center/contain no-repeat url(${$img});
				width: ${$size ?? '2.5rem'};
				height: ${$size ?? '2.5rem'};
			`
		case 'icon':
			return css`
				margin: 0;
				width: ${$size ?? '1.5rem'};
				height: ${$size ?? '1.5rem'};
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
				`
			case 'tertiary':
				return css`
					background-color: ${color.white};
					color: ${color.black};
					border: 1px solid ${color.gray};

					&:disabled {
						background-color: ${color.lightgray};
						color: ${color.gray};
						border-color: ${color.gray};
					}
				`
			default:
				return css``
		}
	}
}

const $sizeStyles = ({ $size, theme }) => {
	switch ($size) {
		case 'sm':
			return css`
				font-size: 0.875rem;
				height: 2em;
				padding: 0 1em;
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
			return css`
				width: ${$size};
				height: ${$size};
			`
	}
}

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.55em;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fw.medium};
	word-break: keep-all;
	border-radius: ${({ $radius }) => $radius || 0};

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
