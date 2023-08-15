import styled from 'styled-components'

export const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 100;
	visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	background-color: ${({ $transparent, theme }) =>
		$transparent ? theme.color.header : theme.color.white};
	color: ${({ $transparent, theme }) =>
		$transparent ? theme.color.white : theme.color.black};
	transition: all 0.25s ease-out, background-color 0.1s ease, color 0.1s ease;
`
