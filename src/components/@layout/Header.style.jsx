import styled from 'styled-components'

export const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 100;
	visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	transition: all 0.1s ease;
`
