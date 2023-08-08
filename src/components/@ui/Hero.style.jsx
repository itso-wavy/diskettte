import styled from 'styled-components'

export const StyledSection = styled.section`
	min-height: 530px;
	height: ${({ $top }) => `calc(100vh - ${$top}px)`};
`
