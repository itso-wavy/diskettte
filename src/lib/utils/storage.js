const storage = {
	storage: {
		auth: localStorage,
		order: sessionStorage,
		order_confirm: sessionStorage,
	},
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

/* order ▶ session */
const getOrderItems = () => storage.get('order')
const setOrderItems = cartItem => storage.set('order', cartItem)
const removeOrderItems = () => storage.remove('order')

/* order_confirm ▶ session */
const getOrderConfirm = () => storage.get('order_confirm')
const setOrderConfirm = receipt => storage.set('order_confirm', receipt)
const removeOrderConfirm = () => storage.remove('order_confirm')

export {
	storage,
	getAuthToken,
	getAccountType,
	getOrderItems,
	setOrderItems,
	removeOrderItems,
	getOrderConfirm,
	setOrderConfirm,
	removeOrderConfirm,
}
