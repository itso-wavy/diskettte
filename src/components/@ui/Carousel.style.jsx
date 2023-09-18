import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	max-width: calc(100vw - 14px);
`

export const ShowBox = styled.div`
	height: 100%;
	position: relative;
`

export const StyledUl = styled.ul`
	display: flex;
	overflow: scroll;
	height: 100%;
	order: 1;

	&::-webkit-scrollbar {
		display: none;
	}
`

export const StyledLi = styled.li`
	display: flex;
	flex: 1 0 100%;
	position: relative;

	& > * {
		flex: 1 0 100%;
	}

	& img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
	}
`

export const Navigation = styled.div`
	& * {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 50%;
		padding: 10px;
		color: ${({ theme }) => theme.color.white};
		transition: all 0.1s ease;
		filter: drop-shadow(0 10px 8px #00000033) drop-shadow(0 0 3px #0000004d);
	}
	.prevClick {
		left: 5px;
	}
	.nextClick {
		right: 5px;
	}

	& *:hover {
		filter: drop-shadow(0 10px 8px #6f8cff33) drop-shadow(0 0 3px #6f8cff4d);
	}
`

export const Indicator = styled.ul`
	display: flex;
	justify-content: center;
	gap: 4px;
	width: 100%;
	margin-bottom: 0.5rem;
	position: absolute;
	bottom: 0;
`

export const IndicatorItem = styled.li`
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: ${({ $active }) => ($active ? '#343A40bb' : '#c2c6caba')};
	cursor: pointer;
`
export const Pagination = styled.div`
	order: -1;
	display: flex;
	align-self: flex-end;
	gap: 0.3rem;
	margin-right: ${({ theme }) => theme.spacing.width.desktop};
	margin-bottom: 0.5em;
	font-size: 1.25rem;
	font-style: italic;

	.current {
		margin-right: 0.125em;
	}

	.entire {
		color: ${({ theme }) => theme.color.darkgray};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-right: ${({ theme }) => theme.spacing.width.mobile};
	}
`
