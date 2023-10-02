import { Suspense, useMemo, useRef } from 'react'
import { Await, useFetcher, useNavigate } from 'react-router-dom'
import { FormProvider } from '../../context/form-context'
import { CartLoading } from '../common'
import { SmallMenus } from '../@ui/Form'
import { Checkbox } from '../@ui/Input'
import { Button } from '../@ui/Button'
import { CartItem } from '.'
import { getProduct, removeFromCart } from '../../lib/api'
import { Wrapper, Titlebox, EmptyWrapper } from './CartList.style'
import useStore from '../../store'

const updatedCartLoader = async cart => {
	// cart 내 아이템이 있을 때, 아이템 정보까지 가져오는 함수
	await Promise.all(
		cart.map(async (item, index) => {
			const product = await getProduct(item.product_id)

			cart[index].product = product
		})
	)

	return cart
}

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
	const fetcher = useFetcher()

	const checkboxRef = useRef()
	const { cart, removeFormCartStore, toggleAllSelected } = useStore()

	const selectAllHandler = () => {
		const selectAll = !checkboxRef.current.checked
		toggleAllSelected(selectAll)
	}

	const removeSelectedHandler = () => {
		const activeProductIds = Object.keys(cart).filter(
			productId => cart[productId].isActive
		)
		const activeCartItemIds = activeProductIds.map(
			productId => cart[productId].cartItemId
		)

		activeProductIds.forEach(productId => removeFormCartStore(productId))

		fetcher.submit(
			{
				type: 'rmSelected',
				cartItemId: JSON.stringify(activeCartItemIds),
			},
			{ method: 'delete' }
		)
	}

	const removeSoldoutHandler = () => {
		const soldoutProductIds = Object.keys(cart).filter(
			productId => cart[productId].isSoldout
		)
		const soldoutCartItemIds = soldoutProductIds.map(
			productId => cart[productId].cartItemId
		)

		soldoutProductIds.forEach(productId => removeFormCartStore(productId))

		fetcher.submit(
			{
				type: 'rmSoldout',
				cartItemId: JSON.stringify(soldoutCartItemIds),
			},
			{ method: 'delete' }
		)
	}

	return (
		<Titlebox {...props}>
			<Checkbox
				ref={checkboxRef}
				id='selectAll'
				name='selectAll'
				info='전체 선택'
				onClick={selectAllHandler}
			/>
			<SmallMenus style={{ fontSize: '.75rem' }}>
				<button onClick={removeSelectedHandler}>선택 삭제</button>
				<button onClick={removeSoldoutHandler}>품절 삭제</button>
			</SmallMenus>
		</Titlebox>
	)
}

function CartList({ cart, ...props }) {
	let updatedCart
	if (cart?.length > 0) {
		updatedCart = useMemo(() => updatedCartLoader(cart), [cart])
	}

	return (
		<Wrapper {...props}>
			<FormProvider
				initialState={{
					selectAll: true,
				}}
			>
				<ListTitle />
			</FormProvider>
			{!cart && <EmptyList type='needSignin' />}
			{cart && (
				<ul>
					{!cart.length && <EmptyList type='emptyCart' />}
					{!!cart.length && (
						<Suspense fallback={<CartLoading />}>
							<Await resolve={updatedCart}>
								{updatedCart =>
									updatedCart.map(item => (
										<FormProvider
											initialState={{
												qty: item.quantity,
												isActive: item.is_active,
											}}
											key={item.product_id}
										>
											<CartItem item={item} />
										</FormProvider>
									))
								}
							</Await>
						</Suspense>
					)}
				</ul>
			)}
		</Wrapper>
	)
}

export { CartList, ListTitle }
