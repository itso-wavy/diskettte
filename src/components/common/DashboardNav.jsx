import { useMemo } from 'react'
import { NavLink, useMatch } from 'react-router-dom'
import { StyledNav, MiniProfile, StyledUl } from './DashboardNav.style'
import useStore from '../../store'

const NavItem = ({ url, ariaLabel, text, ...props }) => {
	const match = useMatch(url)

	return (
		<li>
			<NavLink
				to={url}
				aria-label={ariaLabel}
				aria-current={match && 'page'}
				{...props}
			>
				{text}
			</NavLink>
		</li>
	)
}

export function DashboardNav({ dashboardType, ...props }) {
	const { accountNumber, accountType } = useStore()

	const navMenu = useMemo(() => {
		if (dashboardType === 'SELLER') {
			return [
				{
					url: '/seller/product',
					ariaLabel: 'products in sale',
					text: '판매 상품 조회',
				},
				{
					url: '/seller/product',
					ariaLabel: 'order and shipping management',
					text: '주문 배송 관리',
				},
				{
					url: '/seller/product',
					ariaLabel: 'inquiries and reviews',
					text: '문의/리뷰',
				},
				{
					url: '/seller/product',
					ariaLabel: 'statistics',
					text: '통계',
				},
				{
					url: '/seller/product',
					ariaLabel: 'brand setting',
					text: '브랜드 설정',
				},
			]
		}
		if (dashboardType === 'BUYER') {
			return [
				{
					url: '/mypage/orders',
					ariaLabel: 'my order history',
					text: '주문 배송 조회',
				},
				{
					url: '/mypage/orders',
					ariaLabel: 'my profile',
					text: '내 회원 정보',
				},
				{
					url: '/mypage/orders',
					ariaLabel: 'customer service inquiries',
					text: '1:1 문의 내역',
				},
			]
		}
	}, [dashboardType])

	return (
		<StyledNav aria-label='mypage categories' {...props}>
			<MiniProfile>
				<div className='account-img'></div>
				<p className='account-number'>{accountNumber},</p>
				<p className='account-type'>{accountType}</p>
			</MiniProfile>
			<StyledUl>
				{navMenu.map(menu => (
					<NavItem
						key={menu.ariaLabel}
						url={menu.url}
						ariaLabel={menu.ariaLabel}
						text={menu.text}
					/>
				))}
			</StyledUl>
		</StyledNav>
	)
}
