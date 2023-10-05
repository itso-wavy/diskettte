import styled from 'styled-components'

export const StyledAside = styled.aside`
	padding: 1.25rem;
	font-size: 0.875rem;
	background-color: ${({ theme }) => theme.color.beige};
	z-index: 10;

	.filter-init {
		display: block;
		text-decoration: underline;
		text-underline-offset: 3px;
		margin: 1em 0 1em auto;
	}

	.filter-box {
		margin-bottom: 1.25em;

		&:last-child {
			margin-bottom: 1.75rem;
		}
	}

	.filter-title {
		font-weight: ${({ theme }) => theme.fw.bold};
		margin-bottom: 1rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding-bottom: 0.25rem;
		position: sticky;
		top: ${({ $top }) => $top && $top + 'px'};
	}
`
