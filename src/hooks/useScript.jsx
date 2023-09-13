import { useEffect } from 'react'

export const useScript = (url, onload) => {
	useEffect(() => {
		const script = document.createElement('script')

		script.src = url
		script.onload = onload
		/* 
		try {
			script.src = url
			script.onload = onload
		} catch (err) {
			script.onerror = () =>
				console.error('스크립트 로드 중에 오류가 발생했습니다.😪')
		}
 */
		document.head.appendChild(script)

		return () => document.head.removeChild(script)
	}, [url, onload])
}
