import styled from 'styled-components'
import Button from '../@ui/Button'
import TwitterImg from '/assets/icons/ready/ion_logo-twitter.svg'
import DropdownImg from '/assets/icons/ready/wavy_dropdown-up-sharp.svg'
import CloseImg from '/assets/icons/wavy_menu-close.svg'
import Img from '../@ui/Img'
// import Input from '../@ui/Input'
// import { NavLink } from 'react-router-dom'

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

export default function HeaderCategories() {
	return (
		<div style={{ minHeight: '100px' }}>
			{/* <p style={{ width: '100%' }}>Header Categories</p> */}
			{/* <Button $type='icon' $size='1rem' $img={TwitterImg} onClick aria-label /> */}
			{/* <Button $type='square' $img={CloseImg} onClick aria-label />
			<Button
				$type='square'
				$img={TwitterImg}
				$style='secondary'
				onClick
				aria-label
			/> */}

			<Button $type='rect' $style='secondary' $size='xs' onClick aria-label>
				<p>버튼</p>
				<Img src={DropdownImg} alt='' />
			</Button>
			{/* <Button $type='rect' $style='secondary' $size='sm' onClick aria-label>
				미니버튼
			</Button> */}
			{/* <Button $type='rect' $style='secondary' $size='md' onClick aria-label>
				<p>버튼</p>
				<Img src={TwitterImg} alt='' />
			</Button> */}
			{/* <Button $type='rect' $size='md' onClick aria-label>
				button
			</Button>
			<Button $type='rect' $style='secondary' onClick aria-label>
				button
			</Button> */}
			{/* <Button $type='icon' /> */}
			{/* <Input /> */}
			{/* <ul>
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
			</ul> */}
		</div>
	)
}
