import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
	& > form {
		width: 400px;
	}

	${({ theme }) => {
		return css`
			margin: 3em ${theme.width.desktop};
			padding: 4em 2em;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			z-index: 100;
			color: ${theme.color.black};
			background: rgba(255, 255, 255, 0.1);
			border-radius: 2em;
			backdrop-filter: blur(0.1em);
			border-top: 1px solid #ffffff;
			border-right: 1px solid rgba(255, 255, 255, 0.5);
			-webkit-box-shadow: 0 22px 42px rgba(212, 218, 227, 0.41172);
			box-shadow: 0 22px 42px rgba(212, 218, 227, 0.41172);
			/* box-shadow: inset 20px 12px 24px #e7f2f9, inset -24px -24px 48px #dcdfe2,
				0 35px 68px 0 #88aede6b, 24px 24px 48px #c4d1c8; */

			.title {
				font-size: 2.25rem;
				line-height: 1em;
				font-weight: ${theme.fw.bold};
				margin-bottom: 1.5em;
			}

			.hr {
				display: block;
				margin: 1.5em 0;
				text-align: center;
				color: ${({ theme }) => theme.color.darkgray};
				font-size: 0.8125rem;
				position: relative;
				line-height: 1em;
			}
			.hr::before,
			.hr::after {
				content: '';
				display: inline-block;
				position: absolute;
				top: 0.6em;
				background-color: ${({ theme }) => theme.color.darkgray};
				height: 1px;
				width: 45%;
			}
			.hr::before {
				left: 0;
			}
			.hr::after {
				right: 0;
			}

			/* .btn-box > *:not(:first-of-type) {
				margin-top: 1em;
			} */

			.small-links {
				margin: 0.4em auto 0;
				font-size: 0.875em;
				align-items: center;
				gap: 0;
			}
			.small-links > * {
				position: relative;
				padding: 0 0.6em;
			}
			.small-links > *:not(:last-of-type):after {
				content: '';
				display: inline-block;
				position: absolute;
				top: 3px;
				right: 0;
				height: 0.9em;
				width: 1px;
				background-color: ${({ theme }) => theme.color.gray};
			}

			@media (max-width: ${theme.breakpoints.mobile}) {
				margin: 0 ${theme.width.mobile} 4em;
			}
		`
	}}
`

export const FlexWrapper = styled.div`
	display: flex;
	flex-direction: ${({ $direction }) => $direction || 'column'};
	/* column-gap: 0.625rem; */
	/* row-gap: 0.75rem; // 12px */
	column-gap: 0.45rem;
	row-gap: 0.5rem;
`

// export const StyledForm = styled(Form)`
// 	width: 500px;

// 	.hr {
// 		display: block;
// 		margin: 1.5em 0;
// 		text-align: center;
// 		color: ${({ theme }) => theme.color.darkgray};
// 		font-size: 0.8125rem;
// 		position: relative;
// 		line-height: 1em;
// 	}
// 	.hr::before,
// 	.hr::after {
// 		content: '';
// 		display: inline-block;
// 		position: absolute;
// 		top: 0.6em;
// 		background-color: ${({ theme }) => theme.color.darkgray};
// 		height: 1px;
// 		width: 45%;
// 	}
// 	.hr::before {
// 		left: 0;
// 	}
// 	.hr::after {
// 		right: 0;
// 	}

// 	.btn-box > *:not(:first-of-type) {
// 		margin-top: 1em;
// 	}

// 	.login-box {
// 		margin: 1em auto;
// 		/* padding: 1em; */
// 		font-size: 14px;
// 		text-align: center;
// 		display: flex;
// 		column-gap: 1em;
// 		align-items: center;
// 	}

// 	.login-box > * {
// 		position: relative;
// 	}
// 	.login-box > *:not(:first-of-type):before {
// 		content: '';
// 		display: inline-block;
// 		position: absolute;
// 		left: 0;
// 		height: 1em;
// 		width: 1px;
// 		background-color: ${({ theme }) => theme.color.darkgray};
// 	}
// `

// export const FlexWrapper = styled.div`
// 	display: flex;
// 	flex-direction: ${({ $direction }) => $direction || 'column'};
// 	column-gap: 0.625rem;
// 	row-gap: 1rem;
// `
