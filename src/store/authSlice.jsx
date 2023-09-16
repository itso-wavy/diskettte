import { persist, devtools } from 'zustand/middleware'
import { getAuthToken } from '../lib/utils/storage'

const initialState = {
	isSignedIn: !!getAuthToken(),
	accountNumber: '',
	token: '',
	accountType: '',
}

export const createAuthSlice = devtools(
	persist(
		set => ({
			...initialState,
			signInHandler: ({ id, token, user_type }) =>
				set({
					isSignedIn: true,
					accountNumber: id,
					token: token,
					accountType: user_type,
				}),
			logoutHandler: () => set({ ...initialState, isSignedIn: false }),
		}),
		{
			name: 'auth',
			partialize: state => ({
				accountNumber: state.accountNumber,
				token: state.token,
				accountType: state.accountType,
			}),
		}
	)
)
