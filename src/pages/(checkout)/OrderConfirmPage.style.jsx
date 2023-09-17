import styled from 'styled-components'

export const StyledSection = styled.section`
	max-width: 400px;
	margin: 0 auto;
	padding: 1.875rem;
	position: relative;
	background-color: ${({ theme }) => theme.color.lightgray};
	box-shadow: inset -24px -24px 48px #dcdfe2, inset 0px 0px 6px #e7f2f9,
		6px 10px 7px #cfd4d1;

	&::before {
		content: '';
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(/assets/images/paper-texture.png);
		mix-blend-mode: multiply;
	}

	h2 {
		font-size: 2.8125rem;
		font-weight: ${({ theme }) => theme.fw.bold};
		line-height: 1em;
		font-style: italic;
		text-align: end;
		margin-bottom: 3.8em;
	}
	h2 :last-child {
		display: inline-block;
		position: relative;
		top: 10px;
	}

	.order-number {
		font-size: 0.875rem;
		position: relative;
		margin-bottom: 1em;
	}
	.order-number > p:first-child {
		font-size: 1.1rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		margin-bottom: 0.2em;
	}
	.order-number strong {
		position: relative;
	}
	.order-number strong::after {
		content: '';
		display: inline-block;
		width: 105%;
		height: 1em;
		position: absolute;
		top: 3px;
		left: -3px;
		background-color: #f1ffa4;
		mix-blend-mode: multiply;
		rotate: -3deg;
	}
	.qr-code {
		position: absolute;
		border: ${({ theme }) => `3px solid ${theme.color.black}`};
		padding: 5px;
		bottom: 0;
		right: 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 2em 1.1em;

		.qr-code {
			bottom: 130%;
			left: 0;
		}
	}
`
