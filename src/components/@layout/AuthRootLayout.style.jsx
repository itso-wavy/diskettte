import styled from 'styled-components'

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
		animation: swing 15s infinite ease-in-out;
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

	@keyframes swing {
		30% {
			transform: rotate(30deg) translate(-10em, -3em);
		}
		50% {
			transform: rotate(0deg) translate(-3em, 2em);
		}
		70% {
			transform: scale(0.8) rotate(-15deg) translate(15em, 5em);
		}
		85% {
			transform: scale(0.6) rotate(-15deg) translate(30em, -10em);
		}
	}
	/* @keyframes gradation {
		40% {
			transform: rotate(30deg) translate(-10em, -3em);
		}
		50% {
			transform: rotate(0deg) translate(0, 10em);
		}
		85% {
			transform: scale(0.8) rotate(-25deg) translate(8em, -3em);
		}
	} */

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column-reverse;
		height: 35vh;

		/* &::before {
			content: '';
			width: 100%;
			height: 6em;
			position: absolute;
			bottom: -3.75em;
			background: linear-gradient(transparent, var(--background));
			z-index: 10;
		} */

		.mesh-gradation {
			opacity: 1;
		}
	}
`
