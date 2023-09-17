import styled from 'styled-components'

export const MinusPaddedWrapper = styled.div`
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		/* margin-bottom: -250px; */
		margin-bottom: -200px;
	}
`
