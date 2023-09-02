export const createMobileNavSlice = set => ({
	isMobileNavOpen: false,
	openMobileNav: () => set({ isMobileNavOpen: true }),
	closeMobileNav: () => set({ isMobileNavOpen: false }),
})

// const toastInitialState = {
// 	isToastVisible: false,
// 	toastType: 'default',
// 	toastText: '',
// }

// export const createToastSlice = set => ({
// 	...toastInitialState,
// 	showToast: (type, text) =>
// 		set({
// 			isToastVisible: true,
// 			toastType: type,
// 			toastText: text,
// 		}),
// 	hideToast: () => set({ ...toastInitialState }),
// 	toast: {
// 		info: text => showToast('info', text),
// 		success: text => showToast('success', text),
// 		warning: text => showToast('warning', text),
// 		error: text => showToast('error', text),
// 	},
// })

// const popupInitialState = {
// 	isPoppedUp: false,
// 	popupType: 'default',
// 	popupText: '',
// }

// export const createPopupSlice = set => ({
// 	...popupInitialState,
// 	showPopup: (type, text) =>
// 		set({
// 			isPoppedUp: true,
// 			popupType: type,
// 			popupText: text,
// 		}),
// 	hidePopup: () => set({ ...popupInitialState }),
// 	popup: {
// 		info: text => showPopup('info', text),
// 		success: text => showPopup('success', text),
// 		warning: text => showPopup('warning', text),
// 		error: text => showPopup('error', text),
// 	},
// })
