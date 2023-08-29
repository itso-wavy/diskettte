export const createMobileNavSlice = set => ({
	isMobileNavOpen: false,
	openMobileNav: () => set({ isMobileNavOpen: true }),
	closeMobileNav: () => set({ isMobileNavOpen: false }),
})

const toastInitialState = {
	isToastVisible: false,
	toastType: 'default',
	toastText: '',
}

export const createToastSlice = set => ({
	...toastInitialState,
	showToast: (type, text) =>
		set({
			isToastVisible: true,
			toastType: type,
			toastText: text,
		}),
	hideToast: () => set({ ...toastInitialState }),
	toast: {
		info: text => showToast('info', text),
		success: text => showToast('success', text),
		warning: text => showToast('warning', text),
		error: text => showToast('error', text),
	},
})
