import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SearchInput } from '../@ui/Input'
import { TitleImg } from '../@ui/Img'
import LogoImg from '/logo_b.png'
import {
	MenuOpenSvg,
	CartSvg,
	LoginSvg,
	LogoutSvg,
	MypageSvg,
} from '/src/components/@svg'
import {
	Wrapper,
	StyledMain,
	Title,
	StyleNav,
	StyledLi,
} from './HeaderMain.style'
import useStore from '../../store'

function HeaderLogo({ src, alt, ...props }) {
	return (
		<Title {...props}>
			<Link to='/'>
				<TitleImg src={src} alt={alt} $size='1.5rem' />
			</Link>
		</Title>
	)
}

function HeaderMenu({ children, ...props }) {
	return (
		<StyleNav role='main menu navigation' {...props}>
			<ul>{children}</ul>
		</StyleNav>
	)
}

function HeaderMenuItem({ href, onClick, src, ariaLabel, text, ...props }) {
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

export function HeaderMain({ children, ...props }) {
	const inputRef = useRef()
	const { isMobile, isLogin, logout, isMobileNavOpen, openMobileNav } =
		useStore()

	return (
		<Wrapper {...props}>
			<StyledMain aria-label='Logo and Navigation'>
				<HeaderLogo src={LogoImg} alt='diskettte' />
				<HeaderMenu>
					{isMobile ? (
						<>
							<HeaderMenuItem
								onClick={openMobileNav}
								src={<MenuOpenSvg />}
								ariaLabel='open menu'
								aria-expanded={isMobileNavOpen}
								aria-controls='mobile-nav'
							/>
							<HeaderMenuItem
								href='/cart'
								src={<CartSvg />}
								ariaLabel='go to cart'
							/>
						</>
					) : (
						<>
							<div>
								<SearchInput ref={inputRef} />
							</div>
							<HeaderMenuItem
								href='/cart'
								src={<CartSvg />}
								text='카트'
								ariaLabel='go to cart'
							/>
							<HeaderMenuItem
								href='/mypage'
								src={<MypageSvg />}
								text='마이페이지'
								ariaLabel='go to mypage'
							/>
							{!isLogin ? (
								<HeaderMenuItem
									href='/auth'
									src={<LoginSvg />}
									text='로그인'
									ariaLabel='signin or signup'
								/>
							) : (
								<HeaderMenuItem
									onClick={logout}
									src={<LogoutSvg />}
									text='로그아웃'
									ariaLabel='logout'
								/>
							)}
						</>
					)}
				</HeaderMenu>
			</StyledMain>
			{children}
		</Wrapper>
	)
}
