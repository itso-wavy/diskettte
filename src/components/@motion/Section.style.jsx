import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledSection = styled(motion.section)`
	min-height: ${({ $top }) => $top && `calc(100vh - ${$top}px)`};
	display: grid;
	place-items: center;
`
