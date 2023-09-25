const getViewport = () => {
	const width = window.innerWidth
	// || document.documentElement.clientWidth
	// || document.body.clientWidth

	switch (true) {
		case width <= 430:
			return 'mini'
		case width <= 768:
			return 'mobile'
		case width <= 1280:
			return 'tablet'
		default:
			return 'desktop'
	}
}

const initialState = {
	isMini: getViewport() === 'mini',
	isMobile: getViewport() === 'mini' || getViewport() === 'mobile',
	isTablet: getViewport() === 'tablet',
	isDesktop: getViewport() === 'desktop',
}

export const createViewportSlice = set => ({
	...initialState,
	recheckViewport: () =>
		set({
			isMini: getViewport() === 'mini',
			isMobile: getViewport() === 'mini' || getViewport() === 'mobile',
			isTablet: getViewport() === 'tablet',
			isDesktop: getViewport() === 'desktop',
		}),
})
// const getViewport = () => {
// 	const width =
// 		window.innerWidth ||
// 		document.documentElement.clientWidth ||
// 		document.body.clientWidth

// 	switch (true) {
// 		case width <= 414:
// 			return 'mobile'
// 		case width <= 768:
// 			return 'tablet'
// 		case width <= 1280:
// 			return 'desktop'
// 		default:
// 			return 'wide-screen'
// 	}
// 	return width <= 768 ? (width <= 414 ? 'mobile' : 'tablet') : 'desktop'

// }

// export const createViewportSlice = set => ({
// 	isMobile: getViewport() === 'mobile',
// 	isTablet: getViewport() === 'tablet',
// 	isDesktop: getViewport() === 'desktop',
// 	recheckViewport: () =>
// 		set(() => ({
// 			isMobile: getViewport() === 'mobile',
// 			isTablet: getViewport() === 'tablet',
// 			isDesktop: getViewport() === 'desktop',
// 		})),
// })
