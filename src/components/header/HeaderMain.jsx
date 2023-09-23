import { Link } from 'react-router-dom'
// import { SearchInput } from '../@ui/Input'
import { SearchInput } from '../common'
import { TitleImg } from '../@ui/Img'
import { Button } from '../@ui/Button'
import LogoBImg from '/logo_b.png'
import LogoWImg from '/logo_w.png'
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
		<StyleNav aria-label='main menu' {...props}>
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
				<Button
					$type='icon'
					onClick={onClick}
					aria-label={ariaLabel}
					{...props}
				>
					{innerContents}
				</Button>
			)}
		</StyledLi>
	)
}

export function HeaderMain({ $transparent, children, ...props }) {
	const { isMobile, isMobileNavOpen, openMobileNav, isSignedIn, accountType } =
		useStore()
	const isSeller = accountType === 'SELLER'

	return (
		<Wrapper {...props}>
			<StyledMain aria-label='Logo and Navigation'>
				<HeaderLogo src={$transparent ? LogoWImg : LogoBImg} alt='diskettte' />
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
								<SearchInput />
							</div>
							<HeaderMenuItem
								href='/cart'
								src={<CartSvg />}
								text='카트'
								ariaLabel='go to cart'
							/>
							{isSeller ? (
								<HeaderMenuItem
									href='/seller/product'
									src={<MypageSvg />}
									text='셀러페이지'
									ariaLabel='go to seller`s page'
								/>
							) : (
								<HeaderMenuItem
									href='/mypage'
									src={<MypageSvg />}
									text='마이페이지'
									ariaLabel='go to mypage'
								/>
							)}
							{!isSignedIn ? (
								<HeaderMenuItem
									href='/auth'
									src={<LoginSvg />}
									text='로그인'
									ariaLabel='signin or signup'
								/>
							) : (
								<HeaderMenuItem
									href='/auth/logout'
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
