import { useTitle } from '../../hooks'
import { ProductAdminFormSection } from '../../components/seller'

export function ProductCreatePage() {
	useTitle('상품 등록')

	return (
		<ProductAdminFormSection
			type='create'
			sectionId='productCreate'
			sectionTitle='상품 등록'
		/>
	)
}

export const productCreateAction = async ({ request, params }) => {
	// const isSignedIn = !!getAuthToken()
	// const accountType = getAccountType()
	// if (!isSignedIn) {
	// 	return confirm(
	// 		'구매 계정만 이용할 수 있는 서비스입니다.\n로그인 하시겠습니까?'
	// 	)
	// 		? redirect('/auth/signin')
	// 		: null
	// }
	// if (accountType === 'SELLER') {
	// 	alert('구매 계정만 이용할 수 있는 서비스입니다.')
	// 	return null
	// }
	// const productId = Number(params.productId)
	// const data = await request.formData()
	// const eventType = data.get('submitter')
	// if (eventType === 'toCart') {
	// 	const cart = await getCart()
	// 	const hasItemInCart = cart.some(item => item.product_id === productId)
	// 	if (hasItemInCart) {
	// 		return confirm('이미 추가한 상품입니다.\n장바구니로 이동하시겠습니까?')
	// 			? redirect('/cart')
	// 			: null
	// 	}
	// 	const cartItem = {
	// 		product_id: productId,
	// 		quantity: Number(data.get('qty')),
	// 		check: !hasItemInCart,
	// 	}
	// 	addToCart(cartItem)
	// 	return confirm(
	// 		'장바구니에 상품을 담았습니다!\n장바구니로 이동하시겠습니까?'
	// 	)
	// 		? redirect('/cart')
	// 		: null
	// }
	// if (eventType === 'toOrder') {
	// 	const cartItem = {
	// 		product_id: productId,
	// 		quantity: Number(data.get('qty')),
	// 		order_kind: 'direct_order',
	// 		// total_price:
	// 	}
	// 	setOrderItems(cartItem)
	// 	return redirect('/checkout')
	// }
}
