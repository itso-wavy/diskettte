import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: ${({ $direction }) => $direction};
	position: relative;
`

export const WrapperRotated = styled.div`
	height: 100%;
	display: flex;
	flex-direction: ${({ $direction }) => $direction};
	position: relative;
`
