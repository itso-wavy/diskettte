import { Form } from 'react-router-dom'
import styled from 'styled-components'

export const StyledForm = styled(Form)`
	.phonenumber-bar {
		width: 2rem;
		height: 1px;
		background-color: ${({ theme }) => theme.color.darkgray};
	}

	.terms {
		color: ${({ theme }) => theme.color.darkgray};
		text-decoration: underline;
		text-underline-offset: 2px;
	}
`
