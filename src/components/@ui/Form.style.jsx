import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
	& > form {
		width: 450px;
		max-width: 450px;
		min-width: 320px;
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

			@media (max-width: ${theme.breakpoints.mobile}) {
				margin: 4em ${theme.width.mobile};

				& > form {
					width: 80vw;
				}
			}
		`
	}}
`

export const Title = styled.h2`
	font-size: 2.25rem;
	line-height: 1em;
	font-weight: ${({ theme }) => theme.fw.bold};
	margin-bottom: 1.5em;
`

export const Flexbox = styled.div`
	display: flex;
	flex-direction: ${({ $direction }) => $direction || 'column'};
	align-items: center;
	column-gap: 0.45rem;
	row-gap: 0.5rem;
`

export const InputWrapper = styled.div`
	/* //FIXME: */
	position: relative;
	flex: 1 0 70%;
	margin-bottom: 0.5em;

	${({ extraBtn, theme }) => css`
		& input {
			height: 3rem;
			width: 100%;
			padding: ${!extraBtn
				? '1rem calc(0.8rem + 1.7rem) 1rem 0.8rem'
				: '1rem calc(0.8rem + 2.9rem + 0.2rem) 1rem 0.8rem'};
			font-size: 0.875rem; // 14px
			font-weight: ${theme.fw.normal};
			border: 1px solid ${theme.color.gray};
			color: ${theme.color.black};

			&::placeholder {
				color: ${theme.color.darkgray};
			}
			&:focus {
				outline: 1px solid ${theme.color.black};
			}
		}
	`}

	.btn-box {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2em;
		font-size: 0.75rem;
		line-height: 1em;
		color: ${({ theme }) => theme.color.black};
	}
`

export const Validation = styled.p`
	margin: 0 0.5em calc(0.8em / 2);
	font-size: 0.8125rem;
	line-height: 1.5em;
	color: ${({ theme }) => theme.color.darkgray};

	span:not(:first-of-type) {
		margin-left: 0.2em;
	}

	:is(.valid, &.valid) {
		color: ${({ theme }) => theme.color.safe};
	}
	:is(.invalid, &.invalid) {
		color: ${({ theme }) => theme.color.error};
	}
`

export const StyledSpan = styled.span`
	display: block;
	margin: 1.5em 0;
	text-align: center;
	color: ${({ theme }) => theme.color.darkgray};
	font-size: 0.8125rem;
	position: relative;
	line-height: 1em;

	&::before,
	&::after {
		content: '';
		display: inline-block;
		position: absolute;
		top: 0.6em;
		background-color: ${({ theme }) => theme.color.darkgray};
		height: 1px;
		width: 45%;
	}
	&::before {
		left: 0;
	}
	&::after {
		right: 0;
	}
`

export const SmallFlexbox = styled(Flexbox)`
	flex-direction: row;
	margin: 0.4em auto 0;
	font-size: 0.875em;
	align-items: center;
	gap: 0;

	& > * {
		position: relative;
		padding: 0 0.6em;
	}

	& > *:not(:last-of-type):after {
		content: '';
		display: inline-block;
		position: absolute;
		top: 3px;
		right: 0;
		height: 0.9em;
		width: 1px;
		background-color: ${({ theme }) => theme.color.gray};
	}
`
