import styled from 'styled-components'

export const StyledLink = styled.a`
	position: absolute;
	top: 0;
	left: 1rem;
	transform: translateY(-100%);
	padding: 1.2em 1.5em;
	border-radius: 0.4em;
	font-size: 1.25rem;
	background-color: ${({ theme }) => theme.colors.safe};
	color: ${({ theme }) => theme.colors.white};
	box-shadow: 0 0 10px 1px ${({ theme }) => theme.colors.shadow};
	transition: all 0.2s ease-in-out, transform 0.1s ease;
	outline: none;
	z-index: 1000;

	&:focus {
		transform: translateX(0%);
		top: 1rem;
	}

	&:focus:hover {
		box-shadow: 0 0 15px 3px ${({ theme }) => theme.colors.pink2};
	}

	&:hover:active {
		box-shadow: 0 0 15px 3px ${({ theme }) => theme.colors.pink2};
		background-color: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.black};
		outline: 5px solid ${({ theme }) => theme.colors.pink2};
		outline-offset: -5px;
	}
`

export default function SkipNav() {
	return <StyledLink href='#main-navigation'>Skip to main content</StyledLink>
}
