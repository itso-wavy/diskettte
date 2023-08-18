import styled from 'styled-components'

export const StyledLi = styled.div`
	flex: 1;
	padding: 0.5em 0;
	color: ${({ theme }) => theme.color.darkgray};

	&.active {
		color: ${({ theme }) => theme.color.black};
	}
`

export const TabTrigger = styled.button`
	width: 100%;
	color: inherit;
	border-bottom: 0.25rem solid;
	text-align: center;
`

export const TabContent = styled.div`
	display: none;
	width: 100%;
	position: absolute;
	padding: 2.5rem 0;

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
