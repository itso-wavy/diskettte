import styled from 'styled-components'

export const StyledImg = styled.img`
	width: ${({ $size }) => $size || '100%'};
	height: ${({ $size }) => $size || '100%'};
	display: inline-block;
	vertical-align: middle;
	position: relative;
`

export const StyledLogo = styled(StyledImg)`
	width: 100%;
`
