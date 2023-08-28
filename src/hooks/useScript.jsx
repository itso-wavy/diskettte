import { useEffect } from 'react'

export const useScript = (url, onload) => {
	// 스크립트 로드는 주로 외부 라이브러리나 서드파티 코드를 사용할 때 유용합니다.

	// 이 훅은 useEffect를 사용하여 컴포넌트 라이프사이클에 맞추어 스크립트를 로드하고 제거하는 작업을 수행합니다.
	useEffect(() => {
		let script = document.createElement('script')

		script.src = url
		script.onload = onload

		document.head.appendChild(script)

		return () => document.head.removeChild(script)
	}, [url, onload])
}
