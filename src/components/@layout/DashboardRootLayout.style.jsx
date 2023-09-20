import styled, { css } from 'styled-components'

export const MinusPaddedWrapper = styled.div`
	display: grid;
	grid-template-columns: 300px auto;
	/* margin-bottom: -250px; */
	/* margin-bottom: -200px; */

	& > *:nth-child(2) {
		/* margin: 3.75rem 2.5rem 250px; */
		/* margin: 3.75rem 2.5rem 200px; */
		margin: 3.75rem 2.5rem 0;
		/* width: fit-content; */
	}

	${({ theme }) => {
		const { width } = theme.spacing

		return css`
			margin-inline: auto;
			padding: 0 ${width.desktop};

			@media (max-width: ${theme.breakpoints.mobile}) {
				padding: 0 ${width.mobile};
			}
		`
	}}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		grid-auto-flow: column;
		grid-template: 1fr auto / 1fr;

		& > *:nth-child(2) {
			margin: 3.75rem 0 0;
		}
	}
`
