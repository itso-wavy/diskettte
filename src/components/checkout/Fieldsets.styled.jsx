import styled from 'styled-components'

export const StyledFieldset = styled.fieldset`
	& legend {
		width: 100%;
		font-size: 1.125rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		padding: 0.61em 0;
		margin-bottom: 1.94em;
		border-bottom: ${({ theme }) => `2px solid ${theme.color.black}`};
	}

	/* & .label {
		width: 10em;
	} */
	/* 
	& .invalid {
		margin-left: 11.7em;
	} */

	&:not(:last-child) {
		margin-bottom: 2.75em;
	}
`

export const GridWrapper = styled.div`
	display: grid;
	grid: auto-flow auto / 1fr minmax(10em, 80%);
	/* gap: 0.5rem 0.45rem; */
	column-gap: 1.1875rem;

	.label {
		height: fit-content;
		position: relative;
		top: calc(42px / 2 - 0.5em);
	}

	.shrink {
		max-width: max(75%, 450px);
	}
	/* 
	& > * {
		border: 1px solid #d2f78e;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
	} */
`

export const Wrapper = styled.div`
	/* max-width: 600px; */
`
