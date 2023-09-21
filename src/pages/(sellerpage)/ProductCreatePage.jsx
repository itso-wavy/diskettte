import { redirect } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { ProductAdminFormSection } from '../../components/seller'
import { createProduct } from '../../lib/api'

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
	const {
		productName,
		productImage,
		sellingPrice,
		shippingMethod,
		shippingFee,
		stock,
		productInfo,
		// submitter,
	} = Object.fromEntries(await request.formData())
	// const { productId } = JSON.parse(submitter)

	const productData = {
		product_name: productName,
		image: productImage,
		price: Number(sellingPrice),
		shipping_method: shippingMethod,
		shipping_fee: Number(shippingFee),
		stock: Number(stock),
		product_info: productInfo,
	}

	const seccess = () => redirect('/seller')

	return createProduct(productData, seccess)

	// if (request.method === 'DELETE') {
	// 	const cartItemId = JSON.parse(data.cartItemId)

	// 	cartItemId.forEach(cartItemId => removeFromCart(cartItemId))
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
