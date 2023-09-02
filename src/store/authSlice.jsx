import { persist, devtools } from 'zustand/middleware'
import { getAuthToken } from '../lib/utils/getStorageInfo'

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
			// accountTypeSwitchHandler: () =>
			// 	set({
			// 		accountInfo: {
			// 			...get().accountInfo,
			// 			accountType:
			// 				get().accountInfo.accountType === 'BUYER' ? 'SELLER' : 'BUYER',
			// 		},
			// 	}),
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
/* 
생각해보기!
1. 토큰은 로컬스토리지에 저장하자.
2. 계정id번호가 필요한가...? 저장해야 하나 아직 모르겠다. 마이페이지/마이브랜드 페이지의 경우 필요하지 않을까
3. 위가 필요없다면 계정 유형 state만 단독으로 관리해도 된다. 그게 아니라면 지금 같은 객체 형태도 좋다. */

// export const createAuthSlice2 = devtools(
// 	(set, get) => ({
// 		...initialState,
// 		signInHandler: ({ id, token, user_type }) =>
// 			set({
// 				isSignedIn: true,
// 				accountNumber: id,
// 				token: token,
// 				accountType: user_type,
// 			}),
// 		logoutHandler: () =>
// 			set({
// 				...initialState,
// 			}),
// 		accountTypeSwitchHandler: () =>
// 			set({
// 				accountType: get().accountType === 'BUYER' ? 'SELLER' : 'BUYER',
// 			}),
// 	}),
// 	{
// 		name: 'token',
// 	}
// )
