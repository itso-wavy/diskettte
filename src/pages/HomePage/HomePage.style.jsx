import styled from 'styled-components'

export const Hero = styled.section`
	height: 530px;
`

export const Heading = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
	width: 31.25rem;
	position: absolute;
	bottom: 1.2em;
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

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		width: 26.875rem;
		font-size: 1.5rem;

		& * {
			height: 4.375rem;
			padding: 0 2.8125rem;
		}
	}
`

export const StyledSection = styled.section`
	margin-top: 4.6875rem;
`

export const ChunkWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	background-color: ${({ theme }) => theme.color.white};
`

export const StyledFigure = styled.figure`
	height: 300px; /* point */
	border: 1px solid ${({ theme }) => theme.color.black};
	border-left: 0;

	figcaption {
		width: min(80px, 100%);
		background-color: #ffffff;
		padding: 5px;
		font-size: 1.375rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		text-transform: uppercase;
		display: flex;
		justify-content: end;
		height: 100%;
	}

	.rotate {
		transform: rotate(180deg);
		writing-mode: vertical-rl;
		text-orientation: sideways;
		inline-size: 100%;
	}
`
