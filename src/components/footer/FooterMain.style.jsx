import styled from 'styled-components'

export const StyledUl = styled.ul`
	display: flex;
	margin-bottom: 1.8em;

	li {
		height: 24px;
	}

	li:not(:first-child) {
		margin-left: 0.6rem;
	}
`

export const StyledLi = styled.li`
	&:hover {
		opacity: 0.75;
	}
`
