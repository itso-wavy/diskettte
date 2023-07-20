import { useNavigate } from 'react-router-dom'
import Button from '../@ui/Button'
import Svg from '../@ui/Svg'
import Modal from '../@ui/Modal'
import DropdownImg from '/public/assets/svg/wavy_dropdown-right-sharp.jsx'
import PersonImg from '/public/assets/svg/wavy_person-outline.jsx'
import LoginImg from '/public/assets/svg/wavy_log-in-sharp.jsx'
import LogoutImg from '/public/assets/svg/wavy_log-out-sharp.jsx'
import useStore from '../../store'
import styled from 'styled-components'

const StyledHr = styled.hr`
	background: ${({ theme }) => theme.color.gray};
	height: 1px;
	border: 0;
	margin: 2em 0;
`

const MobileNavItem = ({
	url,
	onClick,
	ariaLabel,
	text,
	$size = 'lg',
	icon = <DropdownImg />,
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
			<Svg src={icon} aria-hidden />
		</Button>
	)
}

export default function MobileNav({ closeMobileNav }) {
	const { isLogin, logout } = useStore()
	const style = { fontSize: '16px' }

	return (
		<>
			<Modal closeMobileNav={closeMobileNav}>
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
					icon={<PersonImg />}
					style={style}
				/>
				{!isLogin ? (
					<MobileNavItem
						url='/auth'
						ariaLabel='signin or signup'
						text='로그인 / 회원가입'
						icon={<LoginImg />}
						style={style}
					/>
				) : (
					<MobileNavItem
						onClick={logout}
						ariaLabel='logout'
						text='로그아웃'
						icon={<LogoutImg />}
						style={style}
					/>
				)}
			</Modal>
		</>
	)
}
