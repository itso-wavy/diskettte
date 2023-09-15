const formatNumber = price => {
	return new Intl.NumberFormat('ko-KR', {
		style: 'decimal',
	}).format(price)
}

const formatDate = (date, customOptions) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' }

	return new Date(date).toLocaleDateString('ko-KR', customOptions ?? options)
}

export { formatNumber, formatDate }
