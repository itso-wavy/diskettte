import { useTitle } from '../../hooks'
import { motion } from 'framer-motion'
import { Grain } from './EventPage.style'

export function EventPage() {
	useTitle('Event')

	return (
		<div>
			<Grain></Grain>
			<p>Curated Pieces for Diverse Tastes</p>
		</div>
	)
}
