import styled from 'styled-components'

export const Wrapper = styled.nav`
	border-bottom: 1px solid ${({ theme }) => theme.color.disabled};

	ul {
		display: flex;
		gap: 1em;
		font-size: 1.25rem;
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	a:hover,
	& .active {
		/* text-underline-offset: 4px; */
		text-underline-offset: 1rem;
		text-decoration: underline;
		text-decoration-thickness: 3px;
	}
`
