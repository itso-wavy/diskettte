import { create } from 'zustand'

const getViewport = () => {
	const width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth

	return width <= 768 ? true : false
}

const useStore = create(set => ({
	isMobile: getViewport(),
	recheckViewport: () => set(() => ({ isMobile: getViewport() })),
}))

export default useStore
