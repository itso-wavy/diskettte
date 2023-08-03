import styled from 'styled-components'

export const StyledNav = styled.nav`
	ul {
		display: flex;
		gap: 1em;
		font-size: 1.25rem;
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	a:hover,
	& .active {
		text-underline-offset: 1rem;
		text-decoration: underline;
		text-decoration-thickness: 3px;
	}
`

export const Wrapper = styled.div`
	margin-top: 0.3em;

	& > * {
		width: 100%;
	}
`
