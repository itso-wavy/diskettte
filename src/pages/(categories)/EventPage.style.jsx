import { styled } from 'styled-components'

export const MinusPaddedWrapper = styled.div`
	/* height: ${({ $top }) => $top && `calc(100vh - ${$top}px)`}; */
	position: relative;
	background-color: #e3e2dd;
	/* margin-bottom: -250px; */
	margin-bottom: -200px;
`

export const Grain = styled.div`
	position: absolute;
	inset: 0;
	z-index: 10;
	background: center/auto url(/assets/images/noise.gif);
	opacity: 0.03;
`

export const GridWrapper = styled.div`
	width: 100%;
	display: grid;
	height: 100%;
	/* z-index: 20; */
	color: green;

	.border {
		border: 1px solid;
		margin: 30px;
		background-color: #ffffff;
	}
`
