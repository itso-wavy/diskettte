import styled, { css } from 'styled-components'

export const StyledSpanLabel = styled.span`
	font-size: 0.875rem;
	font-weight: ${({ theme }) => theme.fw.medium};
	word-break: keep-all;

	&.required::after {
		content: 'ᐟ';
		display: inline;
		color: ${({ theme }) => theme.color.error};
		position: relative;
		font-weight: ${({ theme }) => theme.fw.bold};
		bottom: 6px;
		margin-left: 2px;
	}
`

export const BlockLabel = styled.label`
	background-color: ${({ theme }) => theme.color.white};
	font-size: 0.875rem;
	padding: 0.9375em;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: relative;
	border: ${({ theme }) => `1px solid ${theme.color.gray}`};
	text-wrap: balance;
	text-align: center;

	${({ $checked }) =>
		$checked &&
		css`
			bottom: 3px;
			right: 2px;

			&::after {
				content: '';
				display: inline-block;
				background: no-repeat center/cover
					url('/assets/icons/ri_check-fill.svg');
				width: 1rem;
				height: 1rem;
				margin-left: 5px;
			}
		`}
`

export const ImgLabel = styled.label`
	display: block;
	width: 100%;
	height: inherit;
	min-height: inherit;
	max-height: inherit;
	position: relative;
	margin-bottom: calc(0.8em / 2);
	/* background: no-repeat center/cover; */
	background-color: ${({ $bg, theme }) =>
		$bg ? 'none' : theme.color.lightgray};
	border-radius: 0.7rem;
	overflow-y: hidden;
	cursor: pointer;

	& img {
		width: 100%;
		max-height: 100%;
		object-fit: cover;
		position: relative;
	}

	&::before {
		content: url('/assets/icons/wavy_image-sharp.svg');
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		display: grid;
		place-items: center;
	}
`
