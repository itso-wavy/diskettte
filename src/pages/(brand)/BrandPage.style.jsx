import styled, { css } from 'styled-components'

export const StyledImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`

export const StyledSection = styled.section`
	margin: 0 auto;

	${({ theme }) => {
		const { width, height } = theme.spacing

		return css`
			padding: ${`${height.marginTop} ${width.desktop} 0`};
			width: ${({ theme }) => `min(100%, ${theme.breakpoints.tablet})`};

			h2 {
				margin-bottom: 1.67rem;
				font-size: 1.75rem;
				font-weight: ${theme.fw.bold};
				text-transform: uppercase;
			}

			@media (max-width: ${theme.breakpoints.mobile}) {
				padding-left: ${width.mobile};
				padding-right: ${width.mobile};
			}
		`
	}}
`
