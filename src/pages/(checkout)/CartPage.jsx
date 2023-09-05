import { json, redirect, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { FormProvider } from '../../context/form-context'
import { CartForm, CartList, CartSummary } from '../../components/cart'
import { api, clientAPI } from '../../lib/api'
import { getAuthToken, getAccountType } from '../../lib/utils/getStorageInfo'
import { Wrapper } from './CartPage.style'

export const cartLoader = async () => {
	const isSignedin = !!getAuthToken()
	const accountType = getAccountType()

	if (!isSignedin) return null
	if (accountType === 'SELLER') {
		alert('구매 계정만 이용할 수 있는 서비스입니다.')
		return redirect('/')
	}

	let page = 1
	const client = page => clientAPI(`cart/?page=${page}`)

	const success = res => res.data
	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
	}

	const cart = []
	const chunkedCart = await api(client(1))(success, error)

	// 페이징 처리 제거하는 재귀 함수
	const getAllCartItems = async response => {
		cart.push(...response.results)

		if (!response.next) return

		++page
		const newChunked = await api(client(page))(success, error)

		return getAllCartItems(newChunked)
	}

	getAllCartItems(chunkedCart)

	return cart
}

export function CartPage() {
	const cart = useLoaderData()
	console.log('cart: ', cart)

	useTitle('장바구니')

	const summary = {
		totalPrice: '105,000',
		totalDeliveryFee: '3,000',
		totalDiscount: 0,
		totalPayment: '108,000',
		totalAmount: 1,
	}

	return (
		<Wrapper>
			{/* provider를 여기에 넣는다, 
      또는 li 매핑할 때 그 위에 겹쳐 넣는다. 흠... */}
			{/* <FormProvider
				initialState={{
					productId: '',
					qty: '',
					is_active: '',
				}}
			> */}
			<CartList cart={cart} />
			{/* <CartForm cart={cart} />  */}
			{/* </FormProvider> */}
			<CartSummary summary={summary} />
		</Wrapper>
	)
}
/* 
// 장바구니 수정
{"product_id": Int,
"quantity": Int,
"is_active": Bool}

// 주문생성
{
  "product_id": Int,
  "quantity" : Int,
  "order_kind" : String, // 바로주문하기일 경우에는 direct_order여야 합니다.

  "reciever": String,
  "reciever_phone_number": String,
  "address": String,
  "address_message": String,
  "payment_method": String, //CARD, DEPOSIT, PHONE_PAYMENT, NAVERPAY, KAKAOPAY 중 하나 선택
  "total_price": Int // 총 금액(total_price)은 자동계산되나, 유효성 검사를 위해 받아와야 합니다.
} 

// 장바구니에서 주문
{
  "total_price": Int // cart에 담긴 총 금액(수량*가격+배송비)을 보내줘야 합니다.
  "order_kind" : String // 카트에서 주문할 경우에는 cart_order를 보내줘야 합니다.

  "receiver": String,
  "receiver_phone_number": String, // 01012341234 와 같은 형태로 보내야 합니다.
  "address": String,
  "address_message": String,
  "payment_method": String, //CARD, DEPOSIT, PHONE_PAYMENT, NAVERPAY, KAKAOPAY 중 하나 선택
}*/
