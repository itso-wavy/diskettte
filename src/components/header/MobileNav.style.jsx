import styled, { css } from 'styled-components'

export const StyledHr = styled.hr`
	background: ${({ theme }) => theme.color.gray};
	height: 1px;
	border: 0;
	margin: 2em 0;
`

export const $bgStyle = css`
	animation: slideIn 0.15s ease-in-out;

	@keyframes slideIn {
		from {
			transform: translateX(-80%);
		}
		to {
			transform: translateX(0);
		}
	}
`

export const $itemStyle = { fontSize: '16px' }
