import { styled } from 'styled-components'
import { Section } from '../@motion'
import { rotate, rolling } from '../../lib/utils/animation'

export const RotateWrapper = styled(Section)`
	& img {
		animation: ${rotate} 0.7s linear infinite;
	}
`

export const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	& img {
		animation: ${rolling} 2s ease-in infinite;
	}

	& p {
		margin-top: 1em;
		text-align: center;
		font-style: italic;
		font-weight: ${({ theme }) => theme.fw.medium};
	}
`
