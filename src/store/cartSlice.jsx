const initialState = {
	cart: [], // cart에 is_active 먼저 표시
	/* cart: [{product_id, is_active, price, qty, shipping_fee, discount: 0}] */
	isSelectAll: true,
	cartSummary: {
		totalProductPrice: 0, // price
		totalShippingFee: 0, // shipping_fee
		totalDiscount: 0, // discount
		// totalPayment: 10000000, // price * qty + shipping_fee - discount
		totalQuantity: 0, // is_active한 cart 아이템 개수
	},
}

export const createCartSlice = set => ({
	...initialState,
	// TODO: 각 메서드에 써머리 업뎃 코드 추가
	initCartStore: () => set({ ...initialState }),
	addToCartStore: ({
		// cart_item_id,
		product_id,
		is_active,
		price,
		qty,
		shipping_fee,
		discount,
	}) =>
		set(state => ({
			cart: [
				...state.cart,
				{
					// cart_item_id,
					product_id,
					is_active,
					price,
					qty,
					shipping_fee,
					discount,
				},
			],
		})),
	// set(state => {
	// 	if (!state.cart.some(item => item.product_id === product_id)) {
	// 		return {
	// 			cart: [
	// 				...state.cart,
	// 				{
	// 					product_id,
	// 					is_active,
	// 					price,
	// 					qty,
	// 					shipping_fee,
	// 					discount,
	// 				},
	// 			],
	// 		}
	// 	}
	// 	return state
	// }),
	updateCartStore: ({ product_id, ...update }) =>
		set(state => {
			const updatedCart = state.cart.map(item => {
				if (item.product_id === product_id) {
					return { ...item, ...update }
				}
				return item
			})

			return { ...state, cart: updatedCart }
		}),

	/* 	updateCartStore: ({ product_id, ...update }, { cartItemId, cartItem }) =>
		set(state => {
			const updatedCart = state.cart.map(item => {
				if (item.product_id === product_id) {
					return { ...item, ...update }
				}
				return item
			})

			updateToCart(cartItemId, cartItem)

			return { ...state, cart: updatedCart }
		}),
 */
	toggleAllSelected: selectAll =>
		set(state => ({
			isSelectAll: selectAll,
			cart: state.cart.map(item => ({ ...item, is_active: selectAll })),
		})),

	removeFormCartStore: product_id =>
		set(state => {
			const updatedCart = state.cart.filter(
				item => item.product_id !== product_id
			)

			return { ...state, cart: updatedCart }
		}),
	setSummary: change =>
		set(state => ({ summary: { ...state.summary, ...change } })),
	// areSelected: {
	// 	item1: false,
	// 	item2: true,
	// 	item3: true,
	// },
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
