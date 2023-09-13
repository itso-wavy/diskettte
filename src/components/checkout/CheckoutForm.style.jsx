import styled from 'styled-components'

export const Wrapper = styled.div`
	height: auto;
	display: flex;
	position: relative;
	gap: 3rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
		/* gap: none; */
	}
`
