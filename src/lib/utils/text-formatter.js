const formatPrice = price => {
	return new Intl.NumberFormat('ko-KR', {
		style: 'decimal',
	}).format(price)
}

const formatDate = (date, customOptions) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' }

	return new Date(date).toLocaleDateString('ko-KR', customOptions ?? options)
}

const formatOrderNumber = (created_at, order_number) => {
	const dateOpts = { year: '2-digit', month: '2-digit', day: '2-digit' }

	const formattedOrderNumberDate = formatDate(created_at, dateOpts).replaceAll(
		/[.\s]/g,
		''
	)

	const orderNumber = `DSK${formattedOrderNumberDate}-
${String(order_number).padStart('6', '0')}`

	return orderNumber
}

export { formatPrice, formatDate, formatOrderNumber }
