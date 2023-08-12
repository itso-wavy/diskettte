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

export { rotate, doubleBorder }
