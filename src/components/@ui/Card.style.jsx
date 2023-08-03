import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100%;
	min-height: auto;
	display: flex;
	flex-direction: ${({ $direction }) => $direction};
	position: relative;
`

export const StyledFigure = styled.figure`
	height: 100%;

	figcaption {
		width: min(80px, 100%);
		background-color: #ffffff;
		padding: 5px;
		font-size: 1.375rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		text-transform: uppercase;
		display: flex;
		justify-content: end;
		height: 100%;
	}
`
