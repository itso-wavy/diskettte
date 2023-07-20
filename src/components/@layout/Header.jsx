import { createRef } from 'react'
import { HeaderLogo, HeaderMenu, HeaderMenuItem } from '../header'
import SearchInput from '../@ui/Input'
import LogoImg from '/logo.svg'
import {
	MenuOpenSvg,
	CartSvg,
	LoginSvg,
	LogoutSvg,
	MypageSvg,
} from '/src/components/@svg'
import useStore from '../../store'
import styled from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow: hidden;

	& > * {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 1.375em 3em;
		height: 50px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints}) {
		& > * {
			padding: 0.5em 0.9375em;
			height: 38px;
		}
	}
`

const Wrapper = styled.div`
	justify-content: space-between;
	position: relative;
	align-items: flex-start;
`

export default function Header({ children, openMobileNav }) {
	const { isMobile, isLogin, logout } = useStore()
	const inputRef = createRef()

	return (
		<StyledHeader>
			<Wrapper>
				<HeaderLogo src={LogoImg} alt='diskettte' />
				<HeaderMenu>
					{isMobile ? (
						<>
							<HeaderMenuItem
								onClick={openMobileNav}
								src={<MenuOpenSvg />}
								ariaLabel='open menu'
							/>
							<HeaderMenuItem
								href='/cart'
								src={<CartSvg aria-hidden />}
								ariaLabel='go to cart'
							/>
						</>
					) : (
						<>
							<SearchInput ref={inputRef} placeholder='뭔가 입력해봐!' />
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
			</Wrapper>
			{children}
		</StyledHeader>
	)
}
