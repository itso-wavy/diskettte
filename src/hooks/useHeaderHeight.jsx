import { useEffect, useState } from 'react'

export const useHeaderHeight = () => {
	const [headerHeight, setHeaderHeight] = useState(0)

	useEffect(() => {
		const headerHeight = document.querySelector('#header').clientHeight

		setHeaderHeight(headerHeight)
	}, [])

	return headerHeight
}
