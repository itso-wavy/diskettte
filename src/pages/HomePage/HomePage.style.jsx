import styled, { css } from 'styled-components'
import {
	doubleBorder,
	colorTransition,
	lineText,
} from '../../lib/utils/text-decorator'
import { entrance, shake } from '../../lib/utils/animation'

export const MinusPaddedWrapper = styled.div`
	margin-bottom: -300px;
`

export const HeroWrapper = styled.div`
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
		animation: ${entrance} 1.3s ease-in-out;
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
		animation: ${entrance} 1.3s ease-in-out;
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
`

export const GridWarpper = styled.div`
	padding: 5em 3em 0;
	position: relative;
	display: grid;
	grid:
		'image image2 text' 1fr
		'. transition transition' auto / 1fr 1fr 1fr;
	/* grid: 'image image2 text' 1fr / 1fr 1fr 1fr; */
	gap: 1em;

	${({ $view, theme }) => {
		if (!$view) {
			return css`
				background-color: ${theme.color.white};
				color: ${theme.color.black};
			`
		} else if ($view) {
			return css`
				background-color: ${theme.color.black};
				color: ${theme.color.white};
			`
		}
	}}

	${colorTransition}
  
	& > *:not(:last-child) {
		padding: 1.5rem;
		border-radius: 1.5rem;
		color: ${({ theme }) => theme.color.white};
		font-size: 1rem;
		line-height: 1.1em;
	}

	& > *:nth-child(1) {
		grid-area: image;
		background: no-repeat center / cover url(/assets/images/bg1.png);
		height: 350px;
	}

	& > *:nth-child(2) {
		grid-area: image2;
		background: no-repeat center / cover url(/assets/images/bg2.png);
		height: 350px;
	}

	& > *:nth-child(3) {
		grid-area: text;
		color: inherit;
		padding: 1rem;
		font-size: 1.1em;
		line-height: 1.3em;
		word-break: break-all;
		display: flex;
		justify-content: end;
		gap: 0.8em;
		/* text-wrap: balance; */
	}

	& > *:last-child {
		grid-area: transition;
	}

	.big-font {
		font-size: 1.8em;
		line-height: 1.1em;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-wrap: balance;
	}

	// .big-font:last-child {
	// 	margin-top: 0.8em;
	// }

	.big-arrow {
		border-radius: 50%;
		border: 1px solid white;
	}

	.touch {
		${doubleBorder}
	}

	.see-all {
		display: flex;
		align-items: end;
		position: relative;
	}

	.see-all > .touch {
		position: relative;
		bottom: 0.1em;
		padding: 0.3em;
		margin-right: 0.6em;
		border: 2px solid white;
		outline-color: white;
		outline-offset: -4px;
	}

	.see-all button {
		position: relative;
		bottom: 0.6em;
	}

	.touch:hover,
	.big-arrow:hover,
	.see-all > *:hover {
		transform: scale(1.12);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		grid-template:
			'image image2' 1fr
			'text text' auto
			'transition transition' auto / 1fr 1fr;

		& > *:nth-child(3) {
			margin-top: 2em;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 4em 1.25rem;
		/* margin: 0 1.25rem; */
		grid-template:
			'image' 1fr
			'image2' 1fr
			'text' auto
			'transition' auto / 1fr;

		.touch {
			font-size: 1.1em;
		}
	}

	&::after {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100vw;
		height: 30vh;
		background: ${({ theme }) =>
			`linear-gradient(transparent, ${theme.color.white})`};
	}
`

export const Transition = styled.p`
	padding: 1.2em 0 3.5em;
	font-size: 5rem;
	line-height: 1.1em;
	font-weight: ${({ theme }) => theme.fw.medium};
	text-align: end;
	text-wrap: balance;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 4rem;
	}
`

export const ListWrapper = styled.div`
	display: grid;
	grid-template-columns: ${({ $itemsPerScreen }) =>
		`repeat(${$itemsPerScreen}, 1fr)`};
	/* grid-template: ${({ $itemsPerScreen }) =>
		`repeat(2, 1fr) / repeat(${$itemsPerScreen}, 1fr)`}; */
	grid-auto-rows: 1fr;
`

export const ItemWrapper = styled.div`
	height: 300px; /* point */
	border: 1px solid ${({ theme }) => theme.color.black};
	border-left: 0;
`

export const SignupWrapper = styled.div`
	margin: 9em 0 2em;
	text-align: center;

	& p {
		font-size: 1.5rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		line-height: 1.2em;
		margin-bottom: 0.5em;
		transition: all 0.2s ease-in;

		${lineText}
	}

	& p strong {
		font-size: 1.6rem;
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	&:hover p {
		background-color: black;
		-webkit-text-stroke: 0;
	}

	& img {
		animation: ${shake} 0.24s infinite -0.31s;
		transform-origin: 50%;
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
