import { Form } from 'react-router-dom'
import styled from 'styled-components'

export const StyledForm = styled(Form)`
	.terms {
		color: ${({ theme }) => theme.color.darkgray};
		text-decoration: underline;
		text-underline-offset: 2px;
	}
`
