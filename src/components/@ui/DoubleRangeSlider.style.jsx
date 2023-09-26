import styled from 'styled-components'

export const Wrapper = styled.div`
	--height: 0.25rem; // 4px
	--thumb-size: calc(var(--height) * 4); // 16px

	display: grid;
	position: relative;

	.labels-box {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-top: 1em;
		line-height: 1;
	}

	.tracks-box {
		height: var(--height);
		margin: 0 calc(var(--thumb-size) / 2);
		/* margin-bottom: var(--thumb-size); */
		display: grid;
		align-items: center;
		position: relative;
	}

	#track {
		position: absolute;
		inset: 0;
		z-index: 1;
		background-color: ${({ theme }) => theme.color.white};
	}

	#range-between {
		position: absolute;
		inset: 0;
		z-index: 2;
		background-color: ${({ theme }) => theme.color.black};
		left: 0%; // FIXME:
		right: 0%; // FIXME:
	}

	.thumb {
		width: var(--thumb-size);
		height: var(--thumb-size);
		position: absolute;
		z-index: 3;
		background-color: ${({ theme }) => theme.color.white};
		transition: box-shadow 0.3s ease-in-out;

		&.start {
			transform: translate(calc(var(--thumb-size) / -2), 0px);
			left: 0%; // FIXME:
			left: ${({ left }) => `${left}%`};
		}

		&.end {
			transform: translate(calc(var(--thumb-size) / 2), 0px);
			right: 0%; // FIXME:
			right: ${({ right }) => `${right}%`};
		}
	}

	input {
		width: 100%;
		height: var(--height);
		position: absolute;
		top: 0;
		appearance: none;
		-webkit-appearance: none;
		opacity: 0;
		pointer-events: none;
		cursor: pointer;
	}

	input::-webkit-slider-thumb,
	input::-moz-range-thumb {
		width: var(--thumb-size);
		height: var(--thumb-size);
		/* border: none;
		appearance: none;
		-webkit-appearance: none; */
		z-index: 10;
		background-color: blue;
		pointer-events: all !important;
	}
`
