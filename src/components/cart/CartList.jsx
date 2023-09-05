import { Link, useNavigate } from 'react-router-dom'
import { FormProvider } from '../../context/form-context.jsx'
import { SmallMenus } from '../@ui/Form.jsx'
import { Checkbox } from '../@ui/Input.jsx'
import { Button } from '../@ui/Button.jsx'
import { CartItem } from './CartItem.jsx'
import { Wrapper, Titlebox, EmptyWrapper } from './CartList.style.jsx'
import useStore from '../../store'

function EmptyList({ type, ...props }) {
	const navigate = useNavigate()

	return (
		<EmptyWrapper {...props}>
			{type === 'needSignin' && (
				<>
					<p>구매 계정이 필요한 서비스입니다.</p>
					<Button $style='secondary' onClick={() => navigate('/auth/signin')}>
						GO TO SIGNIN
					</Button>
				</>
			)}

			{type === 'emptyCart' && (
				<>
					<p>카트에 담긴 상품이 없습니다.</p>
					<Button
						$style='secondary'
						onClick={() => navigate('/categories/all')}
					>
						GO TO SHOPPING
					</Button>
				</>
			)}
		</EmptyWrapper>
	)
}

function ListTitle({ ...props }) {
	return (
		<Titlebox {...props}>
			<Checkbox id='selectAll' name='selectAll' />
			<SmallMenus style={{ fontSize: '.75rem' }}>
				<Link to='.'>선택 삭제</Link>
				<Link to='.'>품절 삭제</Link>
			</SmallMenus>
		</Titlebox>
	)
}

function CartList({ cart, ...props }) {
	/* 
  {
    my_cart: 520,
    cart_item_id: 3498,
    product_id: 610,
    quantity: 12,
    is_active: true
  } */

	const { isSignedIn } = useStore()

	return (
		<Wrapper {...props}>
			<ListTitle />
			{!cart && <EmptyList type='needSignin' />}
			{cart && !cart.length && <EmptyList type='emptyCart' />}
			{/* {isSignedIn && (
				<ul>
					<FormProvider
						initialState={{
							productId: '',
							qty: '',
							is_active: '',
						}}
					>
						{!cart &&
							cart.map((item, index) => (
								<CartItem key={index}>{item}</CartItem>
							))}
						{cart &&
							cart.map((item, index) => (
								<CartItem key={index}>{item}</CartItem>
							))}
					</FormProvider>
				</ul>
			)} */}
			{/* 
			{!isSignedIn ? (
				<EmptyBox type='needSignin' />
			) : (
				<ul>
					<FormProvider
						initialState={{
							productId: '',
							qty: '',
							is_active: '',
						}}
					>
						{!cart &&
							cart.map((item, index) => (
								<CartItem key={index}>{item}</CartItem>
							))}
						{cart &&
							cart.map((item, index) => (
								<CartItem key={index}>{item}</CartItem>
							))}
					</FormProvider>
				</ul>
			)} */}
		</Wrapper>
	)
}

export { CartList, ListTitle }
