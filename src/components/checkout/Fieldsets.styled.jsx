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

	&:not(:last-child) {
		margin-bottom: 2.75em;
	}
`

export const GridWrapper = styled.div`
	display: grid;
	grid: auto-flow auto / 1fr minmax(10em, 80%);
	/* column-gap: 1.1875rem; */
	column-gap: 0.5rem;

	.label {
		height: fit-content;
		position: relative;
		top: calc(42px / 2 - 0.5em);
	}

	.shrink {
		max-width: max(75%, 450px);
	}
`
