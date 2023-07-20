import { Link } from 'react-router-dom'
import { LogoImg } from '../@ui/Img'
import Svg from '../@ui/Svg'
import styled from 'styled-components'

const Title = styled.h1`
	height: 28px;
	width: fit-content;

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
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

const StyleNav = styled.nav`
	ul {
		display: flex;
		justify-content: space-between;
		gap: 3rem;
		font-size: 0.5625rem;
		font-weight: bold;
	}

	li > a,
	li > button {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		width: 100%;
		li span {
			display: none;
		}
	}
`

export function HeaderLogo({ src, alt }) {
	return (
		<Title>
			<Link to='/'>
				<LogoImg src={src} alt={alt} $size='1.5rem' />
			</Link>
		</Title>
	)
}

export function HeaderMenu({ children }) {
	return (
		<StyleNav role='main menu navigation'>
			<ul>{children}</ul>
		</StyleNav>
	)
}

export function HeaderMenuItem({ href, onClick, src, ariaLabel, text }) {
	const innerContents = (
		<>
			<Svg src={src} fill='black' aria-hidden />
			<span>{text}</span>
		</>
	)

	return (
		<li>
			{href ? (
				<Link to={href} aria-label={ariaLabel}>
					{innerContents}
				</Link>
			) : (
				<button onClick={onClick} aria-label={ariaLabel}>
					{innerContents}
				</button>
			)}
		</li>
	)
}
