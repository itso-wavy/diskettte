import { setSessionCart } from '../lib/utils/storage'
import { fetchCart } from '../lib/api'

const update = newCart => {
	setSessionCart(newCart)

	return { cart: newCart }
}

export const createCartSlice = set => ({
	cart: [],
	summary: {
		totalProductPrice: 0,
		totalShippingFee: 0,
		totalDiscount: 0,
		totalPayment: 0,
		totalQuantity: 0,
	},
	// 로직: api + 스토리지 사용
	storeCart: () =>
		set(async () => {
			const cart = await fetchCart()
			return update(cart)
		}),
	addToCart: product =>
		set(state => {
			const newCart = state.cart.concat(product)
			return update(newCart)
		}),
	// removeFromCart: productId =>
	// 	set(state => {
	// 		const newCart = state.cart.filter(item => item.product_id !== productId)
	// 		return update(newCart)
	// 	}),
	// clearCart: () =>
	// 	set(() => {
	// 		const newCart = []
	// 		return update(newCart)
	// 	}),
	setSummary: change =>
		set(state => ({ summary: { ...state.summary, change } })),
})

/* 
  totalProductPrice // total_price
  totalShippingFee // total_shipping_fee
  totalDiscount 0,
  totalPayment // total_product_price
  totalQuantity: 0,
  
  combinedCartInfoList, // 카트상품정보+수량
  카트 수정, 
  카트 삭제
  */
