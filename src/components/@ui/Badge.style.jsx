import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.55em;
	font-size: 0.75rem; // 12px
	font-weight: ${({ theme }) => theme.fw.medium};
	min-height: 2em;
	padding: 0.15em 0.8em;

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
				secondary: theme.color.black,
			}[$style] || theme.color.white};
			border: ${{
				primary: 0,
				secondary: `1px solid ${theme.color.black}`,
			}[$style] || 0};
		`}
`
