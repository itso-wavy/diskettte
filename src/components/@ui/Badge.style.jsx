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

	${({ $style, theme }) =>
		css`
			background-color: ${{
				primary: theme.color.black,
				secondary: theme.color.white,
			}[$style] || theme.color.black};
			color: ${{
				primary: theme.color.white,
				secondary: theme.color.darkgray2,
			}[$style] || theme.color.white};
			border: ${{
				primary: 0,
				secondary: `1px solid ${theme.color.darkgray2}`,
			}[$style] || 0};
		`}
`
