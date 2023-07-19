import { Link } from 'react-router-dom'
import useStore from '../../store'
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

		img {
			max-height: 24px;
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

	li > a {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		width: 100%;
	}
`

export function HeaderLogo({ src, alt }) {
	return (
		<Title>
			<Link to='/'>
				<img src={src} alt={alt} />
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

export function HeaderMenuItem({ isLink = true, href, imgSrc, imgAlt, text }) {
	const { isMobile } = useStore()

	return (
		<li>
			{isLink ? (
				<Link to={href}>
					<img src={imgSrc} alt={imgAlt} />
					{!isMobile && <span>{text}</span>}
				</Link>
			) : (
				<button
					onClick={() => {
						console.log('😁')
					}}
				>
					<img src={imgSrc} alt={imgAlt} />
					{!isMobile && <span>{text}</span>}
				</button>
			)}
		</li>
	)
}
