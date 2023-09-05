import { css, styled } from 'styled-components'

export const StyledNav = styled.nav`
	${({ theme }) => {
		return css`
			margin: ${theme.spacing.height.marginTop} 0;

			& > ol {
				display: flex;
				justify-content: center;
			}

			@media (max-width: ${theme.breakpoints.mobile}) {
				margin: ${theme.spacing.height.marginBottom} 0 1rem;

				& > ol {
					flex-direction: column;
				}
			}
		`
	}}
`

export const StyledLi = styled.li`
	${({ theme }) => {
		return css`
			font-size: 1.125rem;
			line-height: 1.2em;
			font-weight: ${theme.fw.medium};
			color: ${theme.color.gray};

			&[aria-current='page'] {
				color: ${theme.color.black};
				font-weight: ${theme.fw.bold};
			}

			&:not(:first-child)::before {
				content: '';
				display: inline-block;
				position: relative;
				top: 1px;
				background: no-repeat center/cover
					url('/public/assets/icons/wavy_chevron-gray.svg');
				width: 1rem;
				height: 1rem;
				margin: 0 10px;
			}

			@media (max-width: ${theme.breakpoints.mobile}) {
				font-size: 1rem;
				/* line-height: 1.3em; */

				&:not([aria-current='page']) {
					font-size: 0.875em;
					/* font-size: 0.8125rem; */
				}

				&:not(:first-child)::before {
					display: none;
				}
			}
		`
	}}
`
