import styled, { css } from 'styled-components'

const $decoration = css`
	.wavy {
		color: ${({ theme }) => theme.color.pink};
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	.wave:hover::after {
		content: '🌊';
		position: absolute;
		font-size: 1.8em;
		/* animation: fadeIn 0.5s ease-in-out; */
		animation: floating 0.6s infinite;
	}

	@keyframes floating {
		0% {
			transform: translateY(0%);
		}
		50% {
			transform: translateY(10%);
		}
		100% {
			transform: translateY(0%);
		}
	}
`

export const StyledFooter = styled.footer`
	${$decoration}

	min-height: 300px;
	width: 100%;
	display: flex;
	font-size: 0.7rem;
	background-color: ${({ theme }) => theme.color.lightgray};
	color: ${({ theme }) => theme.color.black};
	border-top: 1px solid ${({ theme }) => theme.color.black};

	& > * {
		flex-shrink: 0;
	}

	& section {
		padding: 42px ${({ theme }) => theme.width.desktop};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		flex-direction: column;
		background-color: ${({ theme }) => theme.color.black};
		color: ${({ theme }) => theme.color.white};

		& > * {
			padding: 42px ${({ theme }) => theme.width.mobile} !important;
		}

		& section {
			padding: 0;
		}
	}
`

export const FooterMain = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	flex-shrink: 1;
	order: 1;

	small {
		display: inline-block;
		margin-top: 1.8em;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		order: 10;
		border-top: 1px solid ${({ theme }) => theme.color.white};
		/* padding-top: 5em !important; */
	}
`
