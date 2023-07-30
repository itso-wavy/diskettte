import styled from 'styled-components'

export const StyledUl = styled.ul`
	display: flex;
	margin-bottom: 1.8em;

	li {
		height: 24px;
	}

	li:not(:first-child) {
		margin-left: 0.6rem;
	}
`

export const StyledLi = styled.li`
	&:hover {
		opacity: 0.75;
	}
`

export const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	order: 1;

	small {
		display: inline-block;
		margin-top: 1.8em;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		order: 10;
		border-top: 1px solid ${({ theme }) => theme.color.white};
		padding-top: 5em !important;
	}
`
