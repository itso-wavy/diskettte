import styled from 'styled-components'

export const StyledLi = styled.div`
	flex: 1;
	color: ${({ theme }) => theme.color.darkgray};

	&.active {
		color: ${({ $color, theme }) => ($color ? $color : theme.color.black)};
	}
`

export const TabTrigger = styled.button`
	width: 100%;
	padding: 0.35em 0;
	border-bottom: 0.1875em solid;
	color: inherit;
	text-align: center;
`

export const TabContent = styled.div`
	display: none;
	width: 100%;
	position: absolute;
	padding-top: 2.5rem;
	line-height: 1.5em;

	.active & {
		display: block;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		position: relative;
	}
`

export const Wrapper = styled.div`
	& ul {
		display: flex;
		justify-content: space-between;
		position: relative;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		ul {
			flex-direction: column;
		}
	}
`
