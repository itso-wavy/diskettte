export const createAuthSlice = set => ({
	isSignIn: false,
	signInHandler: () => set(() => ({ isLogin: true })),
	logoutHandler: () => set(() => ({ isLogin: false })),
})

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("login_type");
//     setIsLogedIn(false);
//   };
