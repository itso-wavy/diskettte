import { Suspense, useMemo } from 'react'
import { Await, Link, useNavigate } from 'react-router-dom'
import { FormProvider } from '../../context/form-context'
import { CartLoading } from '../common'
import { SmallMenus } from '../@ui/Form'
import { Checkbox } from '../@ui/Input'
import { Button } from '../@ui/Button'
import { CartItem } from './CartItem'
import { Wrapper, Titlebox, EmptyWrapper } from './CartList.style'
import { getProduct } from '../../lib/api'

const updatedCartLoader = async cart => {
	// cart 내 아이템이 있을 때, 아이템 정보까지 가져오는 함수
	// if (cart.length > 0) {
	await Promise.all(
		cart.map(async (item, index) => {
			const product = await getProduct(item.product_id)

			// case 1. 기존 cart에 상품 정보를 추가한 객체 생성
			cart[index].product = product
			// case 2. 위가 너무 헤비하다면 product만 뽑아낸다.
			// return product
		})
	)
	// }

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
	return (
		<Titlebox {...props}>
			<Checkbox id='selectAll' name='selectAll' info='전체 선택' />
			<SmallMenus style={{ fontSize: '.75rem' }}>
				<Link to='.'>선택 삭제</Link>
				<Link to='.'>품절 삭제</Link>
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
			<ListTitle />
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
												productId: item.product_id,
												qty: item.quantity,
												is_active: true,
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
