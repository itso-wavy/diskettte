import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useRedirect(currentPath, redirectTo) {
	const location = useLocation()
	const navigate = useNavigate()

	const pathname = location.pathname
	const trimmedPathname = pathname.endsWith('/')
		? pathname.slice(0, -1)
		: pathname

	useEffect(() => {
		trimmedPathname === `/${currentPath}` && navigate(redirectTo)
	}, [])
}
