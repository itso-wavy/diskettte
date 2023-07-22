import { useRef } from 'react'
import { HeaderLogo, HeaderMenu, HeaderMenuItem } from '../header'
import { SearchInput } from '../@ui/Input'
import LogoImg from '/logo.svg'
import {
	MenuOpenSvg,
	CartSvg,
	LoginSvg,
	LogoutSvg,
	MypageSvg,
} from '/src/components/@svg'
import useStore from '../../store'
import { StyledHeader, HeaderMain } from './Header.style'

export default function Header({
	children,
	showMobileNav,
	openMobileNav,
	...props
}) {
	const { isMobile, isLogin, logout } = useStore()
	const inputRef = useRef()

	return (
		<StyledHeader {...props}>
			<HeaderMain aria-label='Logo and Navigation'>
				<HeaderLogo src={LogoImg} alt='diskettte' />
				<HeaderMenu>
					{isMobile ? (
						<>
							<HeaderMenuItem
								onClick={openMobileNav}
								src={<MenuOpenSvg />}
								ariaLabel='open menu'
								aria-expanded={showMobileNav}
								aria-controls='mobile-nav'
							/>
							<HeaderMenuItem
								href='/cart'
								src={<CartSvg aria-hidden />}
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
			</HeaderMain>
			{children}
		</StyledHeader>
	)
}
