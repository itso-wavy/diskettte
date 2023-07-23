const getViewport = () => {
	const width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth

	return width <= 768 ? true : false
}

export const createViewportSlice = set => ({
	isMobile: getViewport(),
	recheckViewport: () => set(() => ({ isMobile: getViewport() })),
})
