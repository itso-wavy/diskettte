const initialState = {
	cart: {},
	/* {product_id: {is_active, price, qty, shipping_fee, discount: 0}} */
	isSelectAll: true,
	// totalPrice: 0,
}

export const createCartSlice = set => ({
	...initialState,
	initCartStore: () => set({ ...initialState }),
	addToCartStore: ({ productId, ...info }) =>
		set(state => ({
			cart: {
				...state.cart,
				[productId]: {
					...info,
					// cartItemId,
					// productId,
					// isActive,
					// isSoldout,
					// price,
					// qty,
					// shippingFee,
					// discount,
				},
			},
		})),
	updateCartStore: ({ productId, ...update }) =>
		set(state => ({
			cart: {
				...state.cart,
				[productId]: { ...state.cart[productId], ...update },
			},
		})),
	removeFormCartStore: productId =>
		set(state => {
			const updatedCart = { ...state.cart }
			delete updatedCart[productId]

			return { cart: updatedCart }
		}),
	// toggleAllSelected: selectAll => set({ isSelectAll: selectAll }),
	toggleAllSelected: selectAll =>
		set(state => {
			const cartArray = Object.entries(state.cart).map(
				([productId, detail]) => [productId, { ...detail, isActive: selectAll }]
			)
			return { isSelectAll: selectAll, cart: Object.fromEntries(cartArray) }
		}),
	// setTotalPrice: price => set({ totalPrice: price }),
})
