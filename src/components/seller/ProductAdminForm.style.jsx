import styled from 'styled-components'

export const StyledSection = styled.section`
	/* position: relative; */

	h2 {
		margin-bottom: 1.67rem;
		display: flex;
		font-size: 1.75rem;
		line-height: 1em;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-transform: uppercase;
		align-items: start;
	}

	h2 > button {
		margin-left: auto;
		width: fit-content;
	}
`

export const OverviewWrapper = styled.div`
	/* width: 100%; */
	/* height: ${({ $top }) => `calc(100vh - ${$top}px - 6em)`}; */
	/* height: 32.5em; */
	border: 1px solid gold;
	display: flex;
	gap: 3em;

	.image-box {
		margin: 0 auto;
		flex: 0 0 47%;
		min-height: 300px;
		width: 100%;
	}

	.info-box {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		height: auto;
		flex-direction: column;
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

export const ButtonsWrapper = styled.div`
	margin-top: calc(2em - 0.5em);
	grid-column: 2;
`
