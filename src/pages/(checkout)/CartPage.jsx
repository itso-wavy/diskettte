import { Suspense, useEffect, useState } from 'react'
import { Await, defer, redirect, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { FormProvider } from '../../context/form-context'
import { CartList, CartSummary } from '../../components/cart'
import { api, clientAPI, getCart, getProduct } from '../../lib/api'
import { getAuthToken, getAccountType } from '../../lib/utils/storage'
import { Wrapper } from './CartPage.style'

export const cartLoader = async () => {
	const isSignedIn = !!getAuthToken()
	const accountType = getAccountType()

	if (!isSignedIn) return null
	if (accountType === 'SELLER') {
		alert('구매 계정만 이용할 수 있는 서비스입니다.')
		return redirect('/')
	}

	const cart = await getCart()
	// cart 내 아이템이 있을 때, 아이템 정보까지 가져오는 함수
	// if (cart.length > 0) {
	// 	await Promise.all(
	// 		cart.map(async (item, index) => {
	// 			const product = await getProduct(item.product_id)

	// 			// case 1. 기존 cart에 상품 정보를 추가한 객체 생성
	// 			cart[index].product = product
	// 			// case 2. 위가 너무 헤비하다면 product만 뽑아낸다.
	// 			// return product
	// 		})
	// 	)
	// }

	return cart
}

export function CartPage() {
	const cart = useLoaderData()

	useTitle('장바구니')

	const [summary, setSummary] = useState({
		//FIXME: useState를 쓸까, store를 쓸까? ㅎㅎ
		totalProductPrice: 0,
		totalShippingFee: 0,
		totalDiscount: 0,
		totalPayment: '108,000', // total_price
		totalQuantity: 0,
	})

	return (
		<Wrapper>
			<CartList cart={cart} />
			<CartSummary summary={summary} />
		</Wrapper>
	)
}

export const cartAction = async ({ request, params }) => {
	const productId = Number(params.productId)
	const data = await request.formData()
	const eventType = data.get('submitter')

	// if (eventType === 'toOrder') {
	// 	const cartItem = {
	// 		product_id: productId,
	// 		quantity: Number(data.get('qty')),
	// 		order_kind: 'direct_order',
	// 	}

	// 	setOrderItems(cartItem)

	// 	return redirect('/checkout')
	// }
}
/* 
    <cart> 
    cart_item_id: 3498
    is_active: true
    my_cart: 520
    product_id: 610
    quantity: 12
    (+is_active)
    */

/* 
    <product> 
    created_at: "2023-08-24T17:17:12.997484"
    image: "https://openmarket.weniv.co.kr/media/products/2023/08/24/%EC%97%90%EB%B0%98_%EC%9C%8C%EB%A6%AC%EC%97%84%EC%8A%A4_%ED%97%88%EB%8B%88.png"
    price: 27800
    product_id: 600
    product_info: "에반 윌리엄스의 달콤한 버전"
    product_name: "에반 윌리엄스 허니"
    seller: 660
    shipping_fee: 0
    shipping_method: "PARCEL"
    stock: 999
    store_name: "Goodshop"
    updated_at: "2023-08-24T17:17:12.997506"
    */
