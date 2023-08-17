import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 0.625rem; */
	border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};

	& > * {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 1.375em ${({ theme }) => theme.spacing.width.desktop};
		height: 3.125rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		gap: 0.625rem;

		& > * {
			padding: 1em ${({ theme }) => theme.spacing.width.mobile};
			height: 2.375rem;
		}
	}
`

export const StyledMain = styled.div`
	justify-content: space-between;
	position: relative;
	align-items: flex-start;
`

export const Title = styled.h1`
	height: 1.75rem;
	width: fit-content;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
		align-items: center;
		gap: 3rem;
		font-size: 0.5625rem;
		font-weight: bold;
		white-space: nowrap;
	}

	li > a,
	li > button {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	li > button {
		font-size: inherit;
		font-weight: inherit;
		gap: 0;
	}

	svg {
		flex-shrink: 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100%;
		li span {
			display: none;
		}
	}
`

export const StyledLi = styled.li`
	flex-shrink: 0;
`
