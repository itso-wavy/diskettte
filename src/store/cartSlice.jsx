import { getCart, updateCart } from '../lib/utils/getStorageInfo'

/* export const createCartSlice = persist(
	set => ({
		// cart: getCart(),
		mycart: [],
		addToCart: product => set(state => ({ cart: state.cart.concat(product) })),
		removeFromCart: productId =>
			set(state => ({
				cart: state.cart.filter(item => item.id !== productId),
			})),
		clearCart: () => set({ cart: [] }),
	}),
	{
		name: 'cart',
		storage: createJSONStorage(() => sessionStorage),
		// partialize: state => ({
		// 	mycart: state.mycart,
		// }),
	}
)
 */

const update = newCart => {
	updateCart(newCart)

	return { cart: newCart }
}

export const createCartSlice = set => ({
	cart: getCart(),
	addToCart: product =>
		set(state => {
			const newCart = state.cart.concat(product)
			return update(newCart)
		}),
	removeFromCart: productId =>
		set(state => {
			const newCart = state.cart.filter(item => item.product_id !== productId)
			return update(newCart)
		}),
	clearCart: () =>
		set(() => {
			const newCart = []
			return update(newCart)
		}),
})
