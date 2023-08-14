import { useState, useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

export const useScrollTransition = ([initialState, newState]) => {
	const ref = useRef()
	const [state, setState] = useState(initialState)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end end'],
	})

	useMotionValueEvent(scrollYProgress, 'change', value => {
		if (value > 0 && value < 1) {
			setState(newState)
		} else {
			setState(initialState)
		}
	})

	return { ref, state, setState }
}
