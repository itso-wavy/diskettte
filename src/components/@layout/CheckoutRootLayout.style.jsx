import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	${({ theme }) => {
		const { width } = theme.spacing

		return css`
			max-width: ${theme.breakpoints.tablet};
			margin-inline: auto;
			padding: 0 ${width.desktop};

			@media (max-width: ${theme.breakpoints.mobile}) {
				padding: 0 ${width.mobile};
			}
		`
	}}
`
