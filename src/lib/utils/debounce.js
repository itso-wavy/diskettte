const debounce = (callback, time) => {
	let timer

	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => callback(...args), time)
	}
}

export { debounce }
