import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	background-color: ${({ theme }) => theme.color.white};
	color: ${({ theme }) => theme.color.black};
	border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};

	& > * {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 1.375em ${({ theme }) => theme.width.desktop};
		height: 50px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		& > * {
			padding: 1em ${({ theme }) => theme.width.mobile};
			height: 38px;
		}
	}
`

export const StyledMain = styled.div`
	justify-content: space-between;
	position: relative;
	align-items: flex-start;
`

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
