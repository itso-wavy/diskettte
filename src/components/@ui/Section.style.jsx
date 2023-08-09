import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledSection = styled(motion.section)`
	min-height: ${({ $top }) => `calc(100vh - ${$top}px)`};
	/* min-height: ${({ $top }) =>
		$top ? `calc(100vh - ${$top}px)` : '530px'}; */
	display: grid;
	place-content: center;
`
