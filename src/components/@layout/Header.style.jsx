import styled from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow: hidden;
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
			height: 40px;
		}
	}
`

export const HeaderMain = styled.div`
	justify-content: space-between;
	position: relative;
	align-items: flex-start;
`
