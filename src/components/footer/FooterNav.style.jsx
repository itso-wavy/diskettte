import styled from 'styled-components'

export const StyledNav = styled.nav`
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	font-size: 0.8rem;
	flex-shrink: 0;
	order: 1;

	summary,
	.moveout-link {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
		gap: 1em;
	}
`

export const Wrapper = styled.div`
	flex: 1;
	border-left: 1px solid ${({ theme }) => theme.color.black};
	display: flex;

	#company-content,
	#company-content > ul {
		height: 100%;
		position: relative;
	}

	.moveout-link {
		position: absolute;
		white-space: nowrap;
		bottom: 0;
		transform: translateY(-150%);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		.moveout-link {
			position: static;
			transform: none;
		}

		.content:not(:first-child) {
			margin-bottom: 1.9em;
		}
		.moveout-link {
			margin-top: 2.2em;
		}
	}
`
