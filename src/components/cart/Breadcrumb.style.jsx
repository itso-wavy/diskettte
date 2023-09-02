import { css, styled } from 'styled-components'

export const StyledOl = styled.ol`
	${({ theme }) => {
		return css`
			margin: ${theme.spacing.height.marginTop} 0;
			display: flex;
			font-size: 1.125rem;
			line-height: 1.2em;
			font-weight: ${theme.fw.medium};
			color: ${theme.color.gray};

			@media (max-width: ${theme.breakpoints.mobile}) {
				width: 100%;
				margin: ${theme.spacing.height.marginBottom} 0;
				flex-direction: column;
			}
		`
	}}
`

export const StyledLi = styled.li`
	&[aria-current='page'] {
		color: ${({ theme }) => theme.color.black};
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	&:not(:first-child)::before {
		content: '';
		display: inline-block;
		position: relative;
		top: 1px;
		background: no-repeat center/cover
			url('/public/assets/icons/wavy_chevron-black.svg');
		width: 1rem;
		height: 1rem;
		margin: 0 10px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 1rem;

		&:not([aria-current='page']) {
			font-size: 0.8125rem;
		}

		&:not(:first-child)::before {
			display: none;
		}
	}
`
