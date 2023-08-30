const getAuthToken = () => {
	const token = JSON.parse(localStorage.getItem('auth'))?.state.token

	return token
}

const getAccountType = () => {
	const accountType = JSON.parse(localStorage.getItem('auth'))?.state
		.accountType

	return accountType
}

export { getAuthToken, getAccountType }
