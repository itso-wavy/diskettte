import styled, { css } from 'styled-components'
import { floating } from '../../lib/utils/animation'

const $decoration = css`
	.wavy {
		color: ${({ theme }) => theme.color.pink};
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	.wave:hover::after {
		content: '🌊';
		position: absolute;
		font-size: 1.8em;
		animation: ${floating} 0.6s infinite;
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

	.block {
		padding: 42px ${({ theme }) => theme.spacing.width.desktop};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
		background-color: ${({ theme }) => theme.color.black};
		color: ${({ theme }) => theme.color.white};

		& > * {
			padding: 42px ${({ theme }) => theme.spacing.width.mobile} !important;
		}

		.block {
			padding: 0;
		}
	}
`
