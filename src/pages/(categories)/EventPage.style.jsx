import styled from 'styled-components'
import { neon, neon2 } from '../../lib/utils/animation'

export const MinusPaddedWrapper = styled.div`
	position: relative;
	background: ${({ theme }) => theme.color.beige2};
	margin-bottom: -200px;
`

export const Grain = styled.div`
	position: absolute;
	inset: 0;
	background: center/auto url(/assets/images/noise.gif);
	opacity: 0.03;
	pointer-events: none;
`

export const StyledSection = styled.section`
	height: ${({ $top }) => $top && `calc(100vh - ${$top}px)`};
	padding: 2em;

	h2 {
		font-size: 5rem;
		font-weight: ${({ theme }) => theme.fw.bold};
		line-height: 1em;
	}

	strong {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		height: auto;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mini}) {
		h2 {
			font-size: 3.5rem;
		}
	}
`

export const GridWrapper = styled.div`
	height: 100%;
	display: grid;
	grid:
		'title title desc' 38fr
		'sec1 sec2 sec3' 26fr
		'sec1 sec2 sec3' 36fr / 25fr 43fr 32fr;
	background-color: white;
	border: 2px solid;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		grid:
			'title title desc' 250px
			'sec1 sec2 sec2' 400px
			'sec3 sec3 sec3' 450px / 25fr 43fr 32fr;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mini}) {
		grid:
			'title' 250px
			'desc' 130px
			'sec1' 300px
			'sec2' 300px
			'sec3' 450px / auto;
	}

	& > *:not(:last-child) {
		padding: 1em;
		border: 2px solid black;
	}

	.title {
		grid-area: title;
		display: grid;

		.eyeball {
			place-self: end;
		}
	}

	.desc {
		grid-area: desc;
		height: 100%;
		display: grid;
		align-items: end;
		font-size: 0.9rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		background: ${({ theme }) => theme.color.shadow};
	}
`

export const Event1 = styled.a`
	grid-area: sec1;
	background: ${({ theme }) => theme.color.yellow};
	display: grid;
	justify-items: center;
	place-content: center;
	color: ${({ theme }) => theme.color.blue};

	& * {
		transition: 0.2s ease;
	}
	& strong {
		font-size: 6rem;
		line-height: 1em;

		&::after {
			content: '%';
			font-size: 0.35em;
			position: relative;
			top: 0.35em;
		}
	}
	& span {
		font-size: 1.3rem;
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	&:hover strong,
	&:focus strong {
		transform: translateY(-0.4rem) scale(1.15);
	}
	&:hover span,
	&:focus span {
		transform: translateY(-0.3rem) scale(1.1);
		text-decoration: underline;
		text-underline-offset: 5px;
	}
`

export const Event2 = styled.a`
	--hover-transition: 0.3s ease-out;

	display: grid;
	grid-area: sec2;
	background: black;
	place-items: center;
	text-align: center;
	overflow: hidden;
	animation: ${neon} 0.08s ease-in-out infinite alternate;
	transition: var(--hover-transition);

	strong {
		width: 60%;
		color: white;
		line-height: 1em;
		font-size: 3.5rem;
		font-weight: ${({ theme }) => theme.fw.bold};
		white-space: break-spaces;
		transition: var(--hover-transition);

		@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
			width: 100%;
		}
	}

	&:hover,
	&:focus {
		scale: 1.04;
		color: #e7f3ff;
		background: white;
		border: 4px solid black;

		& strong {
			font-size: 4.3rem;
			line-height: 1.1em;
			animation: ${neon2} 0.08s ease-in-out infinite alternate;
		}
	}

	&::before {
		content: '';
		display: block;
		width: 85%;
		aspect-ratio: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		background: black;
		border-radius: 50%;
		transform: translate(-50%, -50%) scale(0);
		transition: 0.4s;
		z-index: -1;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0.8em;
		right: 1.9em;
		font-size: 3em;
		transition: var(--hover-transition);
	}

	&:hover::before,
	&:focus::before {
		transform: translate(-50%, -50%) scale(1);
	}

	&:hover::after,
	&:focus::after {
		content: url(/assets/icons/wavy_long-arror.svg);
		bottom: 1em;
		right: 2.4em;
	}
`

export const Event3 = styled.div`
	grid-area: sec3;
	display: grid;
	grid: 0.8fr 1fr / 0.8fr 1fr;
	background: black;
	/* overflow: hidden; */

	& > * {
		background: white;
		border: 2px solid;
		padding: 1rem;
		font-size: 0.9rem;
		align-items: end;
		line-height: 1em;
		font-weight: ${({ theme }) => theme.fw.bold};
		font-style: italic;
		text-align: center;
	}
	& :nth-child(1) {
		border-radius: 0 0 2.5rem 0;
		background-color: ${({ theme }) => theme.color.lightgray};
	}
	& :nth-child(2) {
		border-radius: 0 0 0 2.5rem;
	}
	& :nth-child(3) {
		border-radius: 0 2.5rem 0 0;
		background-color: ${({ theme }) => theme.color.green};
	}
	& :nth-child(4) {
		border-radius: 2.5rem 0 0 0;
		background-color: ${({ theme }) => theme.color.bluegray};
	}
`
