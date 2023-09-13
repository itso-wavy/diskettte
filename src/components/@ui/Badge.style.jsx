import styled, { css } from 'styled-components'

export const StyledSpan = styled.span`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	font-size: 0.75rem; // 12px
	font-weight: ${({ theme }) => theme.fw.medium};
	min-height: 2em;
	padding: 0.14em 0.8em;

	span {
		position: relative;
		top: 1px;
	}

	img,
	svg {
		width: 0.9375rem;
		height: 0.9375rem;
		transform: translateX(25%);
	}

	${({ $style, theme }) => {
		const color = theme.color

		switch ($style) {
			case 'primary':
				return css`
					background-color: ${color.black};
					color: ${color.white};
					border: 0;
				`
			case 'secondary':
				return css`
					background-color: ${color.white};
					color: ${color.darkgray2};
					border: 1px solid ${color.darkgray2};
				`
			default:
				return css``
		}
	}}
`
