import { create } from 'zustand'
// import { createMobileNavSlice, createPopupSlice } from './modalSlice'
import { createMobileNavSlice } from './modalSlice'
import { createViewportSlice } from './viewportSlice'
import { createAuthSlice } from './authSlice'
import { createCartSlice } from './cartSlice'
// import { createPersistSlice } from './persistSlice'

// 스토어 슬라이싱 후 바운딩으로 단일 스토어 생성
const useBoundStore = create((...a) => ({
	...createMobileNavSlice(...a),
	// ...createPopupSlice(...a),
	...createViewportSlice(...a),
	...createAuthSlice(...a),
	...createCartSlice(...a),
	// ...createPersistSlice(...a),
}))

export default useBoundStore
