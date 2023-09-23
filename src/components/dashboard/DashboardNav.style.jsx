import styled from 'styled-components'

export const StyledNav = styled.nav`
	padding: 0 1.5em;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100%;
		padding: 0;
	}
`

export const MiniProfile = styled.div`
	display: grid;
	place-items: center;
	padding: 2.75em 1em 2.25em;
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.black};

	.account-img {
		border-radius: 50%;
		background-color: ${({ theme }) => theme.color.lightgray};
		width: 60px;
		aspect-ratio: 1;
		margin-bottom: 1.5em;
	}

	.account-img:before {
		content: 'D';
		font-weight: ${({ theme }) => theme.fw.bold};
		font-size: 2rem;
		display: grid;
		place-items: center;
		height: 100%;
		color: ${({ theme }) => theme.color.safe};
		position: relative;
		left: 1px;
	}

	.account-number {
		font-size: 2rem;
		font-weight: ${({ theme }) => theme.fw.bold};
		margin-bottom: 0.3em;
	}
`

export const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 1.5em 0;
	color: ${({ theme }) => theme.color.black};
	border-bottom: ${({ theme }) => `4px solid ${theme.color.black}`};

	a {
		width: 100%;
		padding: 0.8em 1em;
		font-size: 0.9375rem;
	}

	li:not(:last-child) {
		border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};
	}
`
