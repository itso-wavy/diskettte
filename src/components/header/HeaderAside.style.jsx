import styled from 'styled-components'

export const StyledAside = styled.aside`
	min-height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 0.875rem;
	padding: 0.5rem;
	background-color: ${({ theme }) => theme.color.black};

	a {
		color: ${({ theme }) => theme.color.white};
		margin: 0 0.5rem;
		position: relative;
		bottom: -1px;
		/* bottom: 1px; */
	}

	a::after {
		content: '';
		display: inline-block;
		position: absolute;
		left: 0;
		bottom: 2px;
		background-color: white;
		height: 1px;
		width: calc(100% - 5px);
		/* bottom: -1px;
		width: calc(100% + 3px); */
	}

	/* .heart {
		left: 4px;
	} */

	.close {
		position: absolute;
		right: 0;
		margin: 0.6rem;
	}
`
