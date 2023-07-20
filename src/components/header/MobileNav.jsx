import { useNavigate } from 'react-router-dom'
import Button from '../@ui/Button'
import Modal from '../@ui/Modal'
import {
	DropdownSvg,
	LoginSvg,
	LogoutSvg,
	MypageSvg,
} from '/src/components/@svg'
import useStore from '../../store'
import styled, { css } from 'styled-components'

const StyledHr = styled.hr`
	background: ${({ theme }) => theme.color.gray};
	height: 1px;
	border: 0;
	margin: 2em 0;
`

const $style = css`
	@keyframes slideIn {
		from {
			transform: translateX(-80%);
		}
		to {
			transform: translateX(0);
		}
	}

	animation: slideIn 0.15s ease-in-out;
`

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
	)
}

export default function MobileNav({ closeMobileNav }) {
	const { isLogin, logout } = useStore()
	const style = { fontSize: '16px' }

	return (
		<>
			<Modal closeMobileNav={closeMobileNav} $style={$style}>
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
					style={style}
				/>
				{!isLogin ? (
					<MobileNavItem
						url='/auth'
						ariaLabel='signin or signup'
						text='로그인 / 회원가입'
						icon={<LoginSvg />}
						style={style}
					/>
				) : (
					<MobileNavItem
						onClick={logout}
						ariaLabel='logout'
						text='로그아웃'
						icon={<LogoutSvg />}
						style={style}
					/>
				)}
			</Modal>
		</>
	)
}
