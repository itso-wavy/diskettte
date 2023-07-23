export const createAuthSlice = set => ({
	isLogin: true,
	logout: () => set(isLogin => ({ isLogin: !isLogin })),
})
