import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function CallbackPage() {
	const navigate = useNavigate()

	useEffect(() => {
		navigate(-2)
	}, [])
}
