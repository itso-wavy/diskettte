import styled from 'styled-components'

export const Heading = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
	width: 31.25rem;
	position: absolute;
	/* bottom: 1.2em; */
	bottom: 2.3em;
	font-size: 1.8rem;
	line-height: 1.2em;
	font-weight: ${({ theme }) => theme.fw.medium};
	color: white;

	& * {
		height: 5rem;
		display: flex;
		align-items: center;
		background-color: #000;
		padding: 0 3.75rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 26.875rem;
		font-size: 1.5rem;

		& * {
			height: 4.375rem;
			padding: 0 2.8125rem;
		}
	}
`
