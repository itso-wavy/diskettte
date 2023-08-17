import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	height: 2.5rem;
`

export const StyledInput = styled.input`
	width: 3.75rem;
	padding: 1rem 0.5rem;
	font-size: 0.875rem;
	text-align: center;
	border: 1px solid ${({ theme }) => theme.color.gray};

	&:focus {
		outline: none;
	}
`
