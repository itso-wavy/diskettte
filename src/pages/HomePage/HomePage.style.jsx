import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MinusPaddedWrapper = styled.div`
	margin-bottom: -300px;
`

// export const Heading = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 0.625rem;
// 	width: 31.25rem;
// 	position: absolute;
// 	bottom: 1.2em;
// 	font-size: 1.8rem;
// 	line-height: 1.2em;
// 	font-weight: ${({ theme }) => theme.fw.medium};
// 	color: white;

// 	& * {
// 		height: 5rem;
// 		display: flex;
// 		align-items: center;
// 		background-color: #000;
// 		padding: 0 3.75rem;
// 	}

// 	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
// 		width: 26.875rem;
// 		font-size: 1.5rem;

// 		& * {
// 			height: 4.375rem;
// 			padding: 0 2.8125rem;
// 		}
// 	}
// `

export const Hero = styled(motion.div)`
	margin: 0 3em;

	#mainHero {
		font-size: 9rem;
		line-height: 1em;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-wrap: balance;
		text-align: center;
	}

	#mainHero,
	.flower,
	.spring {
		position: relative;
	}

	#mainHero::before {
		content: '';
		display: block;
		width: 8em;
		aspect-ratio: 1;
		position: absolute;
		top: -30%;
		left: -10%;
		border-radius: 50%;
		font-size: 0.25em;
		background-color: ${({ theme }) => theme.color.darkgray2};
		filter: blur(64px);
		mix-blend-mode: exclusion;
	}

	#mainHero::after {
		content: 'Explore more';
		display: grid;
		place-items: center;
		width: 5em;
		aspect-ratio: 1;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 50%;
		font-size: 0.15em;
		line-height: 1em;
		text-align: center;
		background-color: ${({ theme }) => theme.color.white};
		color: ${({ theme }) => theme.color.black};
		mix-blend-mode: exclusion;
	}

	.flower::after {
		content: '';
		display: block;
		background: no-repeat 50% 50% / contain
			url(/assets/images/chrome-flower.png);
		width: 0.8em;
		aspect-ratio: 1;
		position: absolute;
		bottom: -20%;
		right: -15%;
		animation: entrance 1.3s ease-in-out;
	}

	.spring::after {
		content: '';
		display: block;
		background: no-repeat 50% 50% / contain
			url(/assets/images/chrome-spring.png);
		width: 1.4em;
		height: 1em;
		position: absolute;
		top: 50%;
		left: -15%;
		rotate: 25deg;
		animation: entrance 1.3s ease-in-out;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		#mainHero {
			font-size: 8rem;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		#mainHero {
			font-size: 5.5rem;
		}

		#mainHero::after {
			font-size: 0.25em;
			top: 50%;
			transform: translateY(-43%);
		}

		.flower::after {
			font-size: 1.1em;
			bottom: 30%;
			right: -20%;
		}

		.spring::after {
			font-size: 1.1em;
			left: -25%;
		}
	}

	@keyframes entrance {
		0% {
			scale: 1.2;
		}
		85% {
			scale: 1;
		}
	}
`

export const ListWrapper = styled.div`
	display: grid;
	grid-template: ${({ $itemsPerScreen }) =>
		`repeat(2, 1fr) / repeat(${$itemsPerScreen}, 1fr)`};
`

export const ItemWrapper = styled.div`
	height: 300px; /* point */
	border: 1px solid ${({ theme }) => theme.color.black};
	border-left: 0;
`

export const PaddedWrapper = styled.div`
	display: grid;
	place-items: center;
	/* min-height: 500px; */
	padding: 7em 0 10em;
	gap: 2em;

	background-color: ${({ theme }) => theme.color.limegreen};

	p {
		font-size: 3em;
		line-height: 1em;
		font-weight: ${({ theme }) => theme.fw.medium};
		width: 20rem;
		/* word-break: break-word; */
		background-clip: text;
		color: transparent;
		background: linear-gradient(90deg, #ffa54d, #f07bc5 50%, #43aeff);
		background-image: linear-gradient(
			90deg,
			#1e3791 0%,
			#2948b1 40%,
			#3153c6 55%,
			#385fda 60%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* z-index: 2;
    color: rgba(0, 0, 0, 0);
    letter-spacing: -.05em;
    white-space: nowrap;
    font-size: 7.2em;
    font-weight: 400;
    line-height: 1;
    transition: all .5s cubic-bezier(.165, .84, .44, 1);
        -webkit-background-clip: text;
    -webkit-text-stroke: 0.013em #000000;
 => hover{ color: black; }
 */
	}

	a {
		display: block;
		width: 15rem;
	}
`

// framer-motion
export const PreviewMotion = {
	initial: {
		y: 30,
		opacity: 0,
		scale: 0.9,
	},
	animate: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: {
			ease: [0.6, 0.01, 0.05, 0.95],
			duration: 0.8,
		},
	},
}
