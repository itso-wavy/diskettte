import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	position: relative;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
	}
`
