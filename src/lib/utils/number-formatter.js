const formatNumber = price => {
	return new Intl.NumberFormat('ko-KR', {
		style: 'decimal',
	}).format(price)
}

export { formatNumber }
