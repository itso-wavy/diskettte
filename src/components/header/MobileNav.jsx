import { useNavigate } from 'react-router-dom'
import { Button } from '../@ui/Button'
import { Modal } from '../@ui/Modal'
import { StyledHr, $bgStyle, $itemStyle } from './MobileNav.style'
import {
	DropdownSvg,
	LoginSvg,
	LogoutSvg,
	MypageSvg,
} from '/src/components/@svg'
import useStore from '../../store'

const MobileNavItem = ({
	url,
	onClick,
	ariaLabel,
	text,
	$size = 'lg',
	icon = <DropdownSvg />,
	...props
}) => {
	const navigate = useNavigate()

	return (
		<li>
			<Button
				$size={$size}
				onClick={() => {
					url ? navigate(url) : onClick()
				}}
				ariaLabel={ariaLabel}
				{...props}
			>
				<p>{text}</p>
				{icon}
			</Button>
		</li>
	)
}

export function MobileNav({ ...props }) {
	const { isLogin, logout, closeMobileNav } = useStore()

	return (
		<>
			<Modal
				closeModal={closeMobileNav}
				$style={$bgStyle}
				// id='mobile-nav'
				{...props}
			>
				<nav>
					<ul>
						<MobileNavItem
							url='/categories/all'
							ariaLabel='go to all products category'
							text='All'
						/>
						<MobileNavItem
							url='/categories/new-arrivals'
							ariaLabel='go to new-arrivals category'
							text='New arrivals'
						/>
						<MobileNavItem
							url='/categories/exclusive'
							ariaLabel='go to exclusive category'
							text='Exclusive'
						/>
						<MobileNavItem
							url='/categories/event'
							ariaLabel='go to event category'
							text='Event'
						/>
						<StyledHr />
						<MobileNavItem
							url='/mypage/profile'
							ariaLabel='go to exclusive category'
							text='마이페이지'
							icon={<MypageSvg />}
							style={$itemStyle}
						/>
						{!isLogin ? (
							<MobileNavItem
								url='/auth'
								ariaLabel='signin or signup'
								text='로그인 / 회원가입'
								icon={<LoginSvg />}
								style={$itemStyle}
							/>
						) : (
							<MobileNavItem
								onClick={logout}
								ariaLabel='logout'
								text='로그아웃'
								icon={<LogoutSvg />}
								style={$itemStyle}
							/>
						)}
					</ul>
				</nav>
			</Modal>
		</>
	)
}
