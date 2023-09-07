const storage = {
	storage: { auth: localStorage, cart: sessionStorage, order: sessionStorage },
	get: function (key) {
		const storage = this.storage[key]

		return JSON.parse(storage.getItem(key))
	},
	set: function (key, data) {
		const storage = this.storage[key]
		const dataJson = JSON.stringify(data)

		storage.setItem(key, dataJson)
	},
	remove: function (key) {
		const storage = this.storage[key]

		storage.removeItem(key)
	},
}

/* auth ▶ local */
const getAuthToken = () => storage.get('auth')?.state.token
const getAccountType = () => storage.get('auth')?.state.accountType

// /* cart ▶ session */
// const getSessionCart = () => storage.get('cart')
// const setSessionCart = data => storage.set('cart', data)
// const removeSessionCart = () => storage.remove('cart')

/* order ▶ session */
const getOrderItems = () => storage.get('order')
const setOrderItems = cartItem => storage.set('order', cartItem)

export {
	storage,
	getAuthToken,
	getAccountType,
	// getSessionCart,
	// setSessionCart,
	// removeSessionCart,
	getOrderItems,
	setOrderItems,
}
