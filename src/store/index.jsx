import { create } from 'zustand'
import { createMobileNavSlice } from './modalSlice'
import { createViewportSlice } from './viewportSlice'
import { createAuthSlice } from './authSlice'
// import { createBearFishSlice } from './createBearFishSlice'

// 스토어 슬라이싱 후 바운딩으로 단일 스토어 생성
const useBoundStore = create((...a) => ({
	...createMobileNavSlice(...a),
	...createViewportSlice(...a),
	...createAuthSlice(...a),
	// ...createBearFishSlice(...a),
}))

export default useBoundStore
