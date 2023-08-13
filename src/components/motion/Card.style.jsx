import styled from 'styled-components'
import { motion } from 'framer-motion'
import { rotate } from '../../lib/utils/text-decorator'

export const Wrapper = styled(motion.div)`
	height: 100%;
	min-height: auto;
	display: flex;
	flex-direction: ${({ $direction }) => $direction};
	position: relative;
`

export const StyledFigure = styled.figure`
	height: 100%;

	figcaption {
		width: min(80px, 100%);
		background-color: inherit;
		color: inherit;
		/* padding: 5px; */
		font-size: 1.375rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		text-transform: uppercase;
		display: flex;
		justify-content: end;
		height: 100%;
	}

	figcaption > * {
		padding: 5px;

		${rotate}
	}
`
