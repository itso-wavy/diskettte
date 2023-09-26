import styled from 'styled-components'

export const Wrapper = styled.div`
	--height: 0.25rem; // 4px
	--handle-size: calc(var(--height) * 4); // 16px

	display: grid;
	position: relative;

	.labels-box {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-top: 0.8em;
		font-weight: ${({ theme }) => theme.fw.bold};
		color: ${({ theme }) => theme.color.sora};
		line-height: 1;
	}

	.labels-box label {
		background-color: ${({ theme }) => theme.color.white};
		padding: 0.3em 0.6em;
	}

	.labels-box label::after {
		content: '원';
		margin-left: 3px;
		font-weight: initial;
		color: initial;
	}

	input {
		width: 100%;
		height: var(--height);
		position: absolute;
		top: 0;
		appearance: none;
		opacity: 0;
		pointer-events: none;
		z-index: 10;
		cursor: pointer;

		&::-webkit-slider-runnable-track,
		&::-moz-range-track,
		&::-ms-track {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			height: var(--handle-size);
			width: var(--handle-size);
		}

		&::-webkit-slider-thumb {
			pointer-events: auto;
			cursor: pointer;
		}
	}
`

export const TrackBox = styled.div`
	--height: 0.25rem; // 4px
	--handle-size: calc(var(--height) * 4); // 16px
	--left: ${({ $left }) => `${$left}%`};
	--right: ${({ $right }) => `${$right}%`};

	height: var(--height);
	margin: 0 calc(var(--handle-size) / 2);
	display: grid;
	align-items: center;
	position: relative;

	#track {
		position: absolute;
		inset: 0;
		z-index: 1;
		background-color: ${({ theme }) => theme.color.bluegray};
	}

	#range-between {
		position: absolute;
		inset: 0;
		z-index: 2;
		background-color: ${({ theme }) => theme.color.black};
		left: var(--left);
		right: var(--right);
	}

	.handle {
		width: var(--handle-size);
		height: var(--handle-size);
		position: absolute;
		z-index: 3;
		background-color: ${({ theme }) => theme.color.black};
		transition: box-shadow 0.3s ease-in-out;

		&.start {
			transform: translate(calc(var(--handle-size) / -2), 0px);
			left: var(--left);
		}

		&.end {
			transform: translate(calc(var(--handle-size) / 2), 0px);
			right: var(--right);
		}
	}
`
