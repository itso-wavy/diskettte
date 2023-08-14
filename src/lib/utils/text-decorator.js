import { css } from 'styled-components'

const rotate = css`
	transform: rotate(180deg);
	writing-mode: vertical-rl;
	text-orientation: sideways;
	inline-size: 100%;
`

const doubleBorder = css`
	height: fit-content;
	padding: 0.8em;
	border-radius: 50%;
	border: 2px solid black;
	outline: 1px solid black;
	outline-offset: -4px;
`

const colorTransition = css`
	transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	transition-property: color, background-color, border-color,
		text-decoration-color, fill, stroke;
`

const lineText = css`
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-stroke: 0.021em #000000;
	-webkit-text-fill-color: transparent;
`

export { rotate, doubleBorder, colorTransition, lineText }
