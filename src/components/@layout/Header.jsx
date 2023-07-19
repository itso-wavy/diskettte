import { HeaderLogo, HeaderMenu, HeaderMenuItem } from '../header/HeaderMain'
import LogoImg from '/logo.svg'
import MenuOpenImg from '/assets/icons/wavy_menu-open.svg'
import CartImg from '/assets/icons/wavy_cart-outline.svg'
import LoginImg from '/assets/icons/wavy_log-in-sharp.svg'
import MyPageImg from '/assets/icons/wavy_person-outline.svg'
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
		border: 1px solid green;
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

export default function Header({ children }) {
	const { isMobile } = useStore()

	return (
		<StyledHeader>
			<Wrapper>
				<HeaderLogo src={LogoImg} alt='diskettte' />
				<HeaderMenu>
					{isMobile ? (
						<>
							<HeaderMenuItem
								isLink={false}
								imgSrc={MenuOpenImg}
								imgAlt='menu open'
								text='메뉴 열기'
							/>
							<HeaderMenuItem
								href='/cart'
								imgSrc={CartImg}
								imgAlt='cart'
								text='카트'
							/>
						</>
					) : (
						<>
							<HeaderMenuItem
								href='/cart'
								imgSrc={CartImg}
								imgAlt='cart'
								text='카트'
							/>
							<HeaderMenuItem
								href='/mypage'
								imgSrc={MyPageImg}
								imgAlt='mypage'
								text='마이페이지'
							/>
							<HeaderMenuItem
								href='/auth'
								imgSrc={LoginImg}
								imgAlt='login'
								text='로그인'
							/>
						</>
					)}
				</HeaderMenu>
			</Wrapper>
			{children}
		</StyledHeader>
	)
}
