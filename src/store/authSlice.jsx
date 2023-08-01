export const createAuthSlice = set => ({
	isLogin: false,
	logout: () => set(isLogin => ({ isLogin: !isLogin })),
})
