import styled from 'styled-components'
import { swing } from '../../lib/utils/animation'

export const Background = styled.div`
	min-height: 100vh;
	background: ${({ theme }) => theme.color.lightgray};
`

export const Wrapper = styled.div`
	height: 100%;
	max-width: ${({ theme }) => theme.breakpoints.tablet};
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;

	& > *:first-child {
		flex-shrink: 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column-reverse;
	}
`

export const Decoration = styled.div`
	--background: ${({ theme }) => theme.color.lightgray};

	height: 100vh;
	width: 75vw;
	background-color: var(--background);

	.mesh-gradation {
		display: grid;
		place-items: center;
		height: 80%;
		width: 80%;
		animation: ${swing} 15s infinite ease-in-out;
		background-image: radial-gradient(at 20% 30%, #ff362f00 0, transparent 0),
			radial-gradient(at 97% 21%, #0040a022 0, transparent 50%),
			radial-gradient(at 52% 99%, #81cedb 0, transparent 50%),
			radial-gradient(at 30% 29%, #d99fff 0, transparent 50%),
			radial-gradient(at 52% 99%, #a7ff9f 0, transparent 50%),
			radial-gradient(at 10% 29%, #fecaf090 0, transparent 50%),
			radial-gradient(at 97% 100%, #e4c795 0, transparent 50%),
			radial-gradient(at 10% 29%, #81cedb 0, transparent 50%),
			radial-gradient(at 97% 96%, #ffb758 0, transparent 50%);
		filter: blur(70px) saturate(150%);
		opacity: 0.6;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column-reverse;
		height: 35vh;
		position: absolute;
		top: 0;

		.mesh-gradation {
			opacity: 1;
		}
	}
`
