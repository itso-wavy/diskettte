import { create } from 'zustand'
// import { createMobileNavSlice, createToastSlice } from './modalSlice'
import { createMobileNavSlice } from './modalSlice'
import { createViewportSlice } from './viewportSlice'
import { createAuthSlice } from './authSlice'
// import { createCartSlice } from './cartSlice'

// 스토어 슬라이싱 후 바운딩으로 단일 스토어 생성
const useBoundStore = create((...a) => ({
	...createMobileNavSlice(...a),
	// ...createToastSlice(...a),
	...createViewportSlice(...a),
	...createAuthSlice(...a),
	// ...createCartSlice(...a),
}))

export default useBoundStore
