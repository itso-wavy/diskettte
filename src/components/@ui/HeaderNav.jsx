import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoImg from '/logo.svg'
import SearchImg from '/assets/icons/ion_search-outline.svg'
import CartImg from '/assets/icons/wavy_cart-outline.svg'
import LoginImg from '/assets/icons/wavy_log-in-sharp.svg'
import MyPageImg from '/assets/icons/wavy_person-outline.svg'

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 22px 3em;

	ul {
		display: flex;
		justify-content: space-between;
		gap: 3em;
		font-size: 9px;
	}

	li {
		width: 5em;
	}

	li a {
		display: flex;
		flex-flow: column;
		align-items: center;
		font-weight: bold;
	}
`

export const Categories = styled.ul`
	padding: 22px 3em;
	display: flex;
	gap: 3em;
	font-size: 20px;
	font-weight: bold;
	border-bottom: 1px solid #f2f2f2;

	& .active {
		text-decoration: underline;
	}
`

export const StyledLink = styled(Link)`
	visibility: hidden;
	opacity: 0;
	position: fixed;
	bottom: 15px;
	left: 15px;
	padding: 1.5em;
	border-radius: 6px;
	box-shadow: 0 0 15px 3px #00000050;
	transition: all 0.1s ease-in-out;

	&:focus {
		visibility: visible;
		opacity: 1;
	}
`

function SkipNav() {
	return (
		<StyledLink focusable to='#site-navigation'>
			Skip to main navigation
		</StyledLink>
	)
}

export default function HeaderNav() {
	return (
		<>
			<StyledHeader>
				<SkipNav />
				<h1>
					<Link to='/'>
						<img src={LogoImg} alt='diskettte' />
					</Link>
				</h1>
				<nav>
					<ul>
						<li>
							<Link to='/'>
								<img src={SearchImg} alt='search' />
								<span>검색</span>
							</Link>
						</li>
						<li>
							<Link to='/cart'>
								<img src={CartImg} alt='cart' />
								<span>카트</span>
							</Link>
						</li>
						<li>
							<Link to='/mypage'>
								<img src={MyPageImg} alt='mypage' />
								<span>마이페이지</span>
							</Link>
						</li>
						<li>
							<Link to='/auth'>
								<img src={LoginImg} alt='login' />
								<span>로그인</span>
							</Link>
						</li>
					</ul>
				</nav>
			</StyledHeader>
			<Categories>
				<li>
					<NavLink
						to='/categories/all'
						className={({ isActive }) => (isActive ? 'active' : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/categories/new-arrivals'
						className={({ isActive }) => (isActive ? 'active' : undefined)}
					>
						New arrivals
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/categories/exclusive'
						className={({ isActive }) => (isActive ? 'active' : undefined)}
					>
						Exclusive
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/categories/event'
						className={({ isActive }) => (isActive ? 'active' : undefined)}
					>
						Event
					</NavLink>
				</li>
			</Categories>
		</>
	)
}
