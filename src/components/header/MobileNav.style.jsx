import styled, { css } from 'styled-components'
import { slideIn } from '../../lib/utils/animation'

export const StyledHr = styled.hr`
	background: ${({ theme }) => theme.color.gray};
	height: 1px;
	border: 0;
	margin: 2em 0;
`

export const $bgStyle = css`
	animation: ${slideIn} 0.15s ease-in-out;
`

export const $itemStyle = { fontSize: '16px' }
