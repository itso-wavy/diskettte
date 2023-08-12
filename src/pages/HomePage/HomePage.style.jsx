import styled from 'styled-components'
import { doubleBorder } from '../../lib/utils/text-decorator'
import { motion } from 'framer-motion'

export const MinusPaddedWrapper = styled.div`
	margin-bottom: -300px;
`

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

export const Grid = styled.div`
	height: 100%;
	padding: 4em 3em;
	/* margin: 0 3em; */
	display: grid;
	grid-template: 'image image2 text' 1fr / 1fr 1fr 1fr;
	gap: 1em 1em;
	background-color: ${({ theme }) => theme.color.lightgray};

	& > * {
		height: 350px;
		padding: 1.5rem;
		border-radius: 1.5rem;
		color: ${({ theme }) => theme.color.white};
		font-size: 1rem;
		line-height: 1.1em;
	}

	& > *:nth-of-type(1) {
		grid-area: image;
		background: no-repeat center / cover url(/assets/images/bg1.png);
	}

	& > *:nth-of-type(2) {
		grid-area: image2;
		background: no-repeat center / cover url(/assets/images/bg2.png);
	}

	& > *:nth-of-type(3) {
		grid-area: text;
		color: ${({ theme }) => theme.color.black};
		padding: 1rem;
		font-size: 1em;
		line-height: 1.3em;
		word-break: break-all;
		display: flex;
		justify-content: center;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		grid-template:
			'image image2' 1fr
			'text text' 1fr / 1fr 1fr;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 4em 1.25rem;
		/* margin: 0 1.25rem; */
		grid-template:
			'image' 1fr
			'image2' 1fr
			'text' 1fr / 1fr;

		.touch {
			font-size: 1.1em;
		}
	}
`

// export const GridItem = styled.div`
// 	&.tags {
// 		/* color: blue; */
// 	}

// 	&.tags > *:not(:first-child) {
// 		margin: 3px 5px;
// 	}

// 	&.tags > *::after {
// 		content: '';
// 		display: inline-block;
// 		height: 0;
// 		width: 100%;
// 		position: absolute;
// 		bottom: 0;
// 		left: 0;
// 		background-color: ${({ theme }) => theme.color.white};
// 		opacity: 0.7;
// 		transition: 0.3s;
// 		transform: skew(45deg);
// 	}

// 	&.tags > *:hover::after {
// 		bottom: 0;
// 		left: -50%;
// 	}
// `

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
