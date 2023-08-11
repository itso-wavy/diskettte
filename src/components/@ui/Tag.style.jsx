import styled from 'styled-components'

export const Wrapper = styled.div`
	font-size: ${({ $size }) => $size || '1rem'};
	color: ${({ $color }) => $color};
	margin: -0.1875em 0 -0.375em;

	& > * {
		margin: 0.1875em 0;
	}

	& > *:not(:last-child) {
		margin-right: 0.3125em;
	}

	& > *::after {
		background-color: ${({ $color }) => $color};
	}
`

export const StyledP = styled.p`
	width: fit-content;
	display: inline-block;
	padding: 0.25em 0.55em;
	border-radius: 1em;
	border: 1px solid;
	position: relative;
	overflow: hidden;
	font-size: ${({ $size }) => $size || '1rem'};
	color: ${({ $color }) => $color};

	&::after {
		content: '';
		display: inline-block;
		height: 0;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: ${({ $color }) => $color};
		opacity: 0.7;
		transition: all 0.6s cubic-bezier(0.18, 0.89, 0.32, 1.28);
	}

	&:hover::after {
		height: 100%;
	}
`
