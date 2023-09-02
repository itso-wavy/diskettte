import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	${({ theme }) => {
		const { width } = theme.spacing

		return css`
			max-width: ${theme.breakpoints.tablet};
			margin: 0 ${width.desktop};

			/* & > *:last-child {
				 flex-shrink: 0; 
				margin: 0 auto;
			} */

			@media (max-width: ${theme.breakpoints.mobile}) {
				margin: 0 ${width.mobile};
			}
		`
	}}
`
