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
		text-decoration: underline;
		margin: 0 0.5rem;
	}

	.heart {
		left: 3px;
	}

	.close {
		position: absolute;
		right: 0;
		margin: 0.6rem;
	}
`
