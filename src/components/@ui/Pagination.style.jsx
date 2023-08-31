import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNav = styled.nav`
	margin: 5em auto 0;
	width: fit-content;
	display: flex;
	justify-content: center;
`

export const StyledUl = styled.ul`
	display: flex;
	gap: 1px;
	font-size: 0.8rem;
	margin: 0 0.5em;
`

export const StyledLink = styled(Link)`
	border-radius: 3px;
	width: 1.5rem;
	aspect-ratio: 1;
	display: grid;
	place-items: center;
	box-shadow: 0 0 3px #0000004d;

	&:hover {
		color: ${({ theme }) => theme.color.darkgray};
	}

	&[disabled],
	&[aria-current='page'] {
		color: ${({ theme }) => theme.color.darkgray};
		cursor: default;
	}

	& svg {
		width: 18px;
		height: 18px;
	}
	&.flip > * {
		rotate: 180deg;
	}
`

export const StyledNumberLink = styled(StyledLink)`
	--bgc: ${({ $theme }) => $theme};

	box-shadow: none;
	font-weight: ${({ theme }) => theme.fw.bold};

	&:hover {
		background-color: var(--bgc);
	}

	&[aria-current='page'] {
		color: ${({ theme }) => theme.color.white};
		background-color: var(--bgc);
		/* border: ${({ theme }) => `1px solid ${theme.color.black}`}; */
	}
`
