import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100%;
	display: grid;
	grid-template:
		'tl tr' 1fr
		'bl br' 1fr / 1fr 1fr;

	.tl {
		grid-area: tl;
	}

	.tr {
		grid-area: tr;
		justify-self: end;
	}

	.bl {
		grid-area: bl;
		align-self: end;
	}

	.br {
		grid-area: br;
		justify-self: end;
		align-self: end;
	}
`
