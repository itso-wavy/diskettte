export const createMobileNavSlice = set => ({
	isMobileNavOpen: false,
	openMobileNav: () => set(() => ({ isMobileNavOpen: true })),
	closeMobileNav: () => set(() => ({ isMobileNavOpen: false })),
})
