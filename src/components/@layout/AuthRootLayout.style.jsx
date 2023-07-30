import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 32px;
	height: 100%;
	width: 100%;
	background-color: black;
	color: white;

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		flex-direction: column-reverse;
		/* height: 35vh; */
	}
`
export const Background = styled.div`
	/* --jxkb841: 100%; */
	background: repeat-y center/cover
		url(https://static.lystit.com/static/n/img/sign-up/value-proposition-full-min.12502ad2e109c860f1eeceea2a988ddf.png);
	/* ,
		url(https://static.lystit.com/static/n/img/sign-up/value-proposition-full-min.12502ad2e109c860f1eeceea2a988ddf.png) */
	width: 75%;
	height: 100vh;

	/* animation: jxkb843 48s linear infinite; */

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		height: 100%;
		height: 35vh;
		/*	animation: jxkb843 70s linear infinite; */
	}
`
