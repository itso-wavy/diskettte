import styled, { css } from 'styled-components'

// const $style = css`
// 	font-size: 0.875rem;
// 	font-weight: ${({ theme }) => theme.fw.medium};
// 	white-space: nowrap;

// 	&.required::after {
// 		content: 'ᐟ';
// 		display: inline;
// 		color: ${({ theme }) => theme.color.error};
// 		position: relative;
// 		font-weight: ${({ theme }) => theme.fw.bold};
// 		bottom: 6px;
// 		margin-left: 2px;
// 		/* bottom: 2px;
// 		margin-left: 5px; */
// 	}

// 	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
// 		width: 7em;
// 		white-space: normal;
// 		word-wrap: break-word;
// 		/* text-wrap: balance; */
// 	}
// `

// export const StyledLabel = styled.label`
// 	${$style}
// `

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
		/* bottom: 2px;
		margin-left: 5px; */
	}
	/* 
	&.address {
		align-self: flex-start;
		position: relative;
		top: calc(50px / 2 - 0.5em);
	} */
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
			/* border-color: ${({ theme }) => theme.color.black};
			border-right: 2px solid;
			border-bottom: 3px solid; */
			bottom: 3px;
			right: 2px;

			&::after {
				content: '';
				display: inline-block;
				background: no-repeat center/cover
					url('/public/assets/icons/ri_check-fill.svg');
				width: 1rem;
				height: 1rem;
				margin-left: 5px;
			}
		`}
`
