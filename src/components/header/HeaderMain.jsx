import { Link } from 'react-router-dom'
import { LogoImg } from '../@ui/Img'
import { Title, StyleNav } from './HeaderMain.style'

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

export function HeaderMenuItem({
	href,
	onClick,
	src,
	ariaLabel,
	text,
	...props
}) {
	const innerContents = (
		<>
			{src}
			<span>{text}</span>
		</>
	)

	return (
		<li>
			{href ? (
				<Link to={href} aria-label={ariaLabel} {...props}>
					{innerContents}
				</Link>
			) : (
				<button onClick={onClick} aria-label={ariaLabel} {...props}>
					{innerContents}
				</button>
			)}
		</li>
	)
}
