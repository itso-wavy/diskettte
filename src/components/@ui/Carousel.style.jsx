import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100%;
	overflow: hidden;
	position: relative;
`

export const StyledUl = styled.ul`
	display: flex;
	overflow: hidden;
	height: 100%;
`

export const StyledLi = styled.li`
	flex: 1 0 100%;
	background-color: #ddd;
	display: flex;

	& > a {
		flex: 1 0 100%;
	}

	img {
		display: inline-block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const Navigation = styled.div`
	& * {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.prevClick {
		left: 0;
	}
	.nextClick {
		right: 0;
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
