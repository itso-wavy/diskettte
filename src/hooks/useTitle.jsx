import { useEffect } from 'react'

export const useTitle = service => {
	useEffect(() => {
		const title = 'DISKETTTE'

		document.querySelector('title').textContent = service
			? `${service} - ${title}`
			: title
	}, [service])
}
