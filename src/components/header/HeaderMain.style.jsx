import styled from 'styled-components'

export const Title = styled.h1`
	height: 28px;
	width: fit-content;

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin: 0 auto;

		& > a {
			display: block;
			width: fit-content;
			margin: 0 auto;
		}
	}
`

export const StyleNav = styled.nav`
	ul {
		display: flex;
		justify-content: space-between;
		gap: 3rem;
		font-size: 0.5625rem;
		font-weight: bold;
	}

	li > a,
	li > button {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		width: 100%;
		li span {
			display: none;
		}
	}
`

export const StyledLi = styled.li`
	flex-shrink: 0;
`
