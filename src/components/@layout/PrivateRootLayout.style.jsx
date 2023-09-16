import styled, { css } from 'styled-components'

export const MinusPaddedWrapper = styled.div`
	display: grid;
	grid-template-columns: 300px auto;
	margin-bottom: -250px;

	& > *:last-child {
		margin: 3.75rem 2.5rem 250px;
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
`
