import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5em;
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
		width: 0.625rem;
		height: 0.625rem;
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
					color: 1px solid ${color.darkgray2};
					border: 0;
				`
			default:
				return css``
		}
	}}
`
/* 
		return css`
			background-color: ${{
				primary: color.black,
				secondary: color.white,
			}[$style] || color.black};
			color: ${{
				primary: color.white,
				secondary: color.darkgray2,
			}[$style] || color.white};
			border: ${{
				primary: 0,
				secondary: `1px solid ${color.darkgray2}`,
			}[$style] || 0};
 */
