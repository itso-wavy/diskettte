import styled from 'styled-components'
import { InputWrapper } from '../@ui/Input.style'

export const SearchInputWrapper = styled(InputWrapper)`
	& input {
		background-color: ${({ theme }) => theme.color.lightgray};
		border: 0;
		height: 2.25rem;
		z-index: 1000;
	}
`

// export const $windowStyle = css`
// 	animation: slideIn 0.15s ease-in-out;

// 	@keyframes slideIn {
// 		from {
// 			transform: translateX(-80%);
// 		}
// 		to {
// 			transform: translateX(0);
// 		}
// 	}
// `

export const StyledDialog = styled.dialog`
	--right: 5em;

	width: ${({ theme }) => `calc(${theme.breakpoints.mobile} - var(--right))`};
	min-height: 30em;
	padding: 1.1em 2em;
	position: fixed;
	top: ${({ $top }) => `${$top}px`};
	right: var(--right);
	margin-left: auto;
	border: none;
	font-size: 0.875rem;
	word-break: break-all;
	white-space: break-spaces;
	overflow: auto;
	opacity: 0.95;

	.close {
		margin-left: auto;
	}

	.close svg {
		width: 100%;
		height: 100%;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100%;
		height: ${({ $top }) => `calc(100vh - ${$top}px)`};
		right: 0;
	}
`

export const StyledUl = styled.ul`
	#searchWindow & {
		display: flex;
		flex-flow: column nowrap;
		gap: 2px;
		font-weight: initial;
		white-space: initial;
	}

	li {
		width: 100%;
		font-size: 0.875rem;
	}

	#searchWindow & a {
		display: block;
		padding: 0.4em 0.6em;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		transition: background-color 0.1s ease-in, color 0.1s ease-in;
	}
	a:hover {
		background-color: ${({ theme }) => theme.color.lightgray};
		color: ${({ theme }) => theme.color.blue};
		font-weight: ${({ theme }) => theme.fw.bold};
	}
`
