import styled from 'styled-components'

export const HeroWrapper = styled.div`
	height: min(530px, 70vh);
	/* margin-bottom: 7.5rem; */
`

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

export const StyledSection = styled.section`
	padding: 3.75rem 2em 0;

	h2 {
		margin-bottom: 1.67rem;
		font-size: 1.75rem;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-transform: uppercase;
	}
`

export const ContentsWrapper = styled.div`
	display: grid;
	grid-template-columns: min(320px, 30%) auto;
`

export const LNB = styled.aside`
	// 에셋으로 만들까?
	background-color: #ddd;

	&& + * {
		margin-left: 3.75rem;
	}
`

// export const ProductsWrapper = styled.div`
// 	width: 100%;
// `
