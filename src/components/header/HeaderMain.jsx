import { Link } from 'react-router-dom'
import { LogoImg } from '../@ui/Img'
import { Title, StyleNav, StyledLi } from './HeaderMain.style'

export function HeaderLogo({ src, alt, ...props }) {
	return (
		<Title {...props}>
			<Link to='/'>
				<LogoImg src={src} alt={alt} $size='1.5rem' />
			</Link>
		</Title>
	)
}

export function HeaderMenu({ children, ...props }) {
	return (
		<StyleNav role='main menu navigation' {...props}>
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
		<StyledLi>
			{href ? (
				<Link to={href} aria-label={ariaLabel} {...props}>
					{innerContents}
				</Link>
			) : (
				<button onClick={onClick} aria-label={ariaLabel} {...props}>
					{innerContents}
				</button>
			)}
		</StyledLi>
	)
}
