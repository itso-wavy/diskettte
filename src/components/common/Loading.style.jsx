import { styled } from 'styled-components'
import { Section } from '../motion'
import { rotate } from '../../lib/utils/animation'

export const LoadingWrapper = styled(Section)`
	& img {
		animation: ${rotate} 0.7s linear infinite;
	}
`
