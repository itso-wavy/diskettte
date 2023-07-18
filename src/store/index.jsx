import create from 'zustand'

const getViewport = () => {
	const width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth

	return width < 768 ? 'mobile' : 'desktop'
}

const useStore = create(set => ({
	viewport: getViewport(), // 'mobile' or 'desktop'
	recheckViewport: () => set(() => ({ viewport: getViewport() })),
}))

export default useStore
