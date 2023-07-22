import styled from 'styled-components'

export const StyledSection = styled.section`
	border-left: 1px solid ${({ theme }) => theme.color.black};
	flex-grow: 1;

	.moveout-link > a {
		margin-top: 3.3em;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		&:not(:first-child),
		.moveout-link > a {
			margin-top: 1.6em;
		}
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	font-size: 0.8rem;
	order: 1;

	h3,
	.moveout-link > a {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		flex-direction: column;
	}
`
