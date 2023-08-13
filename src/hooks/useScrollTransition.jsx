import { useState, useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

export const useScrollTransition = ([initialState, newState]) => {
	const ref = useRef()
	const [state, setState] = useState(initialState)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start center', 'end center'],
	})

	useMotionValueEvent(scrollYProgress, 'change', value => {
		if (value > 0 && value < 1) {
			setState(initialState)
		} else {
			setState(newState)
		}
	})

	return { ref, state, setState }
}
